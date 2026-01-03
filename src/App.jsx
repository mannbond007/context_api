import React from "react";
import Home from "./components/Home";
import UserContext from "./context/UserContext";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Sysrover");
  return (
    <>
      <UserContext.Provider value={{ name, setName }}>
        <Home />
      </UserContext.Provider>
    </>
  );
};

export default App;
