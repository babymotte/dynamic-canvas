import React from "react";
import { CanvasComponentProps, DynamicCanvas } from "../../dist";

export default function Cross() {
  return (
    <DynamicCanvas style={{ border: "1em solid red", flexGrow: 1 }}>
      <CrossGraphic color="blue" />
    </DynamicCanvas>
  );
}

type CrossGraphicProps = CanvasComponentProps & { color: string };

function CrossGraphic({
  ctx,
  canvasWidth: w,
  canvasHeight: h,
  color,
}: CrossGraphicProps) {
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
