import React from "react";
import {
  CanvasComponentProps,
  useDynamicCanvasProps,
} from "../hooks/dynamicCanvas";

export function DynamicCanvas<T extends Element>({
  children,
  parentRef,
}: {
  children?:
    | React.ReactElement<CanvasComponentProps>
    | React.ReactElement<CanvasComponentProps>[];
  parentRef: React.RefObject<T | null | undefined>;
}) {
  const props = useDynamicCanvasProps<T>(parentRef);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  const childProps = {
    ctx: canvasRef.current?.getContext("2d"),
    canvasWidth: props.width,
    canvasHeight: props.height,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return (
    <canvas {...props} ref={canvasRef}>
      {childrenWithProps}
    </canvas>
  );
}
