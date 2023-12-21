import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateBMI } from "./calculateBMI";

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label>
      {label}:
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
    <br />
  </div>
);

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCalculateBMI = () => {
    setError("");
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);

    if (
      numWeight < 1.0 ||
      numWeight > 300.0 ||
      numHeight < 0.1 ||
      numHeight > 3.0
    ) {
      setError(
        "Please enter valid weight (1.0-300.0 kg) and height (0.1-3.0 meters)."
      );
      return;
    }

    const bmiValue = calculateBMI(numWeight, numHeight);
    if (bmiValue !== null) {
      alert(`Your BMI is: ${bmiValue}`);
    } else {
      setError("Invalid input for weight or height.");
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputField
          label="Weight (kg)"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <InputField
          label="Height (m)"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleCalculateBMI}>Calculate</button>
      </form>
      <button onClick={() => navigate("/")}>Back to Landing Page</button>
    </div>
  );
};

export default BMICalculator;
