import { useState } from "react";
import "./App.css";
import { Amount } from "./Amount";
import { Satisfaction1 } from "./Satisfaction1";
import { Satisfaction2 } from "./Satisfaction2";
import { Output } from "./Output";
import { Reset } from "./Reset";

export default function App() {
  const [bill, setBill] = useState(10);
  const [tip1, setTip1] = useState(5);
  const [tip2, setTip2] = useState(5);

  const tip = (bill * (tip1 + tip2)) / 200;

  function handleReset() {
    setBill(10);
    setTip1(5);
    setTip2(5);
  }

  return (
    <div className="container">
      <div className="main-container">
        <Amount bill={bill} onBill={setBill} />
        <Satisfaction1 setTip={setTip1} tip={tip1} />
        <Satisfaction2 setTip={setTip2} tip={tip2} />
        <Output tip={tip} bill={bill} />
        <Reset reset={handleReset} />
      </div>
    </div>
  );
}
