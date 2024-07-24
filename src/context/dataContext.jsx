import React, { createContext, useState } from "react";

const DataContext = createContext(undefined);

function DataProvider({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <DataContext.Provider value={{ counter: counter, setCounter: setCounter }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
