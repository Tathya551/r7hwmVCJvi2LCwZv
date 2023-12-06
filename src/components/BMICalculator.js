import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (parseFloat(weight) / parseFloat(height) ** 2).toFixed(
        1
      );
      setBMI(bmiValue);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form>
        <label>
          Weight (kg):
          <input
            type="text"
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Height (m):
          <input
            type="text"
            name="height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </form>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>BMI: {bmi}</p>}
      <button onClick={goBack}>Back to Landing Page</button>
    </div>
  );
};

export default BMICalculator;
