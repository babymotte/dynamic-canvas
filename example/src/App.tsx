import React from "react";
import "./App.css";
import ButtonContainer from "./ButtonContainer";

export default function App() {
  const [count, setCount] = React.useState(5);
  return (
    <>
      <div>
        <button onClick={() => setCount(Math.min(10, count + 1))}>+</button>
        <button onClick={() => setCount(Math.max(count - 1, 1))}>-</button>
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
      <div style={{ width: "50%", height: 64, overflow: "hidden" }}>
        <ButtonContainer count={count} />
      </div>
    </>
  );
}
