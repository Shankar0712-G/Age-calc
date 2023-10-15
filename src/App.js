import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

function App() {
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    const dob = new Date(document.querySelector('input[type="date"]').value);
    const today = new Date();
    const ageInMilliseconds = today - dob;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input type="date" /><br />
      <button onClick={calculateAge} className="btn btn-primary m-2 focus-ring">Calculate Age</button>
      {age !== null && <h2>You are {age} years old.</h2>}
    </div>
  );
}

export default App;
