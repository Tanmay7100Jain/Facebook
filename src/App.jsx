import { useState } from "react";
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("Home");

  return (
    <>
      <Header selected={selected} setSelected={setSelected} />
      <div className="flex flex-row">
        <Middle selected={selected} />
      </div>
    </>
  );
}

export default App;
