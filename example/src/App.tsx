import { CanvasComponentProps, DynamicCanvas } from "dynamic-canvas";
import React from "react";
import "./App.css";

export default function App() {
  const ref = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useLayoutEffect(() => {
    console.log(canvasRef.current);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }} ref={ref}>
      <DynamicCanvas
        parentRef={ref}
        canvasRef={canvasRef}
        style={{ opacity: 0.1 }}
      >
        <Cross color="blue" />
      </DynamicCanvas>
    </div>
  );
}

type CrossProps = CanvasComponentProps & { color: string };

function Cross({ ctx, canvasWidth: w, canvasHeight: h, color }: CrossProps) {
  console.log("rendering");

  React.useEffect(() => {
    if (ctx && w && h) {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, h);
      ctx.moveTo(0, h);
      ctx.lineTo(w, 0);
      ctx.closePath();
      ctx.stroke();
    }
  }, [color, ctx, h, w]);

  return null;
}
