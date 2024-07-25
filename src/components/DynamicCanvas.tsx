/**
 * Copyright 2024 Michael Bachmann
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { CanvasComponentProps } from "..";

export function DynamicCanvas({
  children,
  canvasRef: ref,
  ...props
}: {
  children?:
    | React.ReactElement<CanvasComponentProps>
    | React.ReactElement<CanvasComponentProps>[];
  canvasRef?: React.MutableRefObject<HTMLCanvasElement | null>;
  style?: React.CSSProperties;
  props?: object;
}) {
  const internalCanvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const canvasRef = ref || internalCanvasRef;

  const ratio = window.devicePixelRatio;

  const childProps = {
    ctx: canvasRef.current?.getContext("2d"),
    canvasWidth: width * ratio,
    canvasHeight: height * ratio,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (parent != null) {
      const listener = new ResizeObserver((entries) => {
        setWidth(0);
        setHeight(0);
        requestAnimationFrame(() => {
          setWidth(entries[0].contentRect.width);
          setHeight(entries[0].contentRect.height);
          requestAnimationFrame(() => {
            setWidth(0);
            setHeight(0);
            requestAnimationFrame(() => {
              setWidth(entries[0].contentRect.width);
              setHeight(entries[0].contentRect.height);
            });
          });
        });
      });
      listener.observe(parent);
      return () => {
        listener.unobserve(parent);
        listener.disconnect();
      };
    }
  }, [canvasRef]);

  return (
    <canvas
      {...props}
      width={width * ratio}
      height={height * ratio}
      ref={canvasRef}
    >
      {childrenWithProps}
    </canvas>
  );
}
