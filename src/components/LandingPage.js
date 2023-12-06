import React from "react";
import { Link } from "react-router-dom";
// import MyDetails from "./MyDetails";
// import ResumeLink from "./ResumeLink";

const LandingPage = () => (
  <div>
    <h1>Welcome</h1>
    {/* <MyDetails />
    <ResumeLink /> */}
    <Link to="/bmi-calculator">BMI Calculator</Link>
  </div>
);

export default LandingPage;
