import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setValue(value + e.target.name);
  }

  function backSpace() {
    setValue(value.slice(0, value.length - 1));
  }
  function clear() {
    setValue("");
  }

  function calculate() {
    try {
      setValue(eval(value).toString());
    } catch (eror) {
      setValue("Error Mas !");
    }
  }

  return (
    <div className="App">
      <p>
        {" "}
        <strong>Kalkulator Sederhana</strong>
      </p>
      <div className="calculator">
        <input className="input" type="text" value={value} ref={inputRef} />
        <br />

        <div className="keyboard">
          <button id="clear" onClick={clear}>
            clear
          </button>
          <button id="backspace" onClick={backSpace}>
            C
          </button>
          <button onClick={handleClick} name="*" id="operate">
            *
          </button>
          <button onClick={handleClick} name="1" id="number">
            1
          </button>
          <button onClick={handleClick} name="2" id="number">
            2
          </button>
          <button onClick={handleClick} name="3" id="number">
            3
          </button>
          <button onClick={handleClick} name="/" id="operate">
            /
          </button>
          <button onClick={handleClick} name="4" id="number">
            4
          </button>
          <button onClick={handleClick} name="5" id="number">
            5
          </button>
          <button onClick={handleClick} name="6" id="number">
            6
          </button>
          <button onClick={handleClick} name="+" id="operate">
            +
          </button>
          <button onClick={handleClick} name="7" id="number">
            7
          </button>
          <button onClick={handleClick} name="8" id="number">
            8
          </button>
          <button onClick={handleClick} name="9" id="number">
            9
          </button>
          <button onClick={handleClick} name="-" id="operate">
            -
          </button>
          <button onClick={handleClick} name="0" id="number">
            0
          </button>
          <button onClick={handleClick} name="." id="number">
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
