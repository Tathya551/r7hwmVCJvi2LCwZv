import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
