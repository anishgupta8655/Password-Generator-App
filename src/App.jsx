import React, { useState } from "react";

import "./App.css";
import { LC, NC, SC, UC } from "./component/passChar";

function App() {
  const [upperCase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passwordLen, setPasswordLen] = useState(10);
  const [fPass, setFPass] = useState("");

  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (upperCase || lowercase || number || symbol) {
      if (upperCase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      // console.log(charSet);
      for (let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
      console.log(finalPass);
    } else {
      alert("Please select on checkbox");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };

  return (
    <>
      <div className="passwordBox">
        <h1 style={{ padding: "5px" }}>Password Generator</h1>
        <div className="passwordBoxin">
          <input type="text" readOnly value={fPass} />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label htmlFor="">Create Password</label>
          <input
            type="number"
            value={passwordLen}
            onChange={(e) => setPasswordLen(e.target.value)}
            max={20} min={8}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Including Uppercase</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUppercase(!upperCase)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Including Lowercase</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passLength">
          <label htmlFor="">Including Number</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include Symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <div>
          <button className="btn" onClick={createPassword}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
