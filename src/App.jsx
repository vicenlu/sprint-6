import { useState, useContext } from "react";
import "./App.css";
/* import { DataContext } from "./context/dataContext"; */

import { DataContext } from "./context/dataContext.jsx";

function App() {
  const { counter, setCounter } = useContext(DataContext);

  return (
    <div className="font-poppins">
      <button className="btn btn-primary" onClick={() => setCounter(5)}>
        Valor contador: {counter}
      </button>
    </div>
  );
}

export default App;
