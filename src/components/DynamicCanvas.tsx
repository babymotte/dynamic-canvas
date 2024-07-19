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
