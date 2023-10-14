import React, { useState } from "react";

function App() {
  const [metinEkle, setMetinEkle] = useState("");
  const [tut, setTut] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setMetinEkle(newValue);
  }
  function ekleTut() {
    setTut((prevTut) => {
      return [...prevTut, metinEkle];
    });
    setMetinEkle("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Yapılacaklar Listesi</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={metinEkle} />
        <button onClick={ekleTut}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tut.map((todoTut) => (
            <li> {todoTut} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
