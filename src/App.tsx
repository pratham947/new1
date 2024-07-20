import { useState } from "react";
import First from "./first.avif"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={First} width={"100%"} height={"100%"}/>
      </div>
    </>
  );
}

export default App;
