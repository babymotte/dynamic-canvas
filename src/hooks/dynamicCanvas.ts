import React from "react";
import { useContainerBounds } from "./dynamicContainer";

export function useDynamicCanvasProps<T extends Element>(
  containerRef: React.RefObject<T | null | undefined> | undefined
) {
  const [canvasWidth, canvasHeight] = useContainerBounds<T>(containerRef);

  const ratio = Math.ceil(window.devicePixelRatio);

  const style = React.useMemo(
    () => ({
      width: `${canvasWidth}px`,
      height: `${canvasHeight}px`,
    }),
    [canvasHeight, canvasWidth]
  );

  return React.useMemo(
    () => ({ width: ratio * canvasWidth, height: ratio * canvasHeight, style }),
    [canvasHeight, canvasWidth, ratio, style]
  );
}

export type CanvasComponentProps = {
  ctx?: CanvasRenderingContext2D | null | undefined;
  canvasWidth?: number;
  canvasHeight?: number;
};
