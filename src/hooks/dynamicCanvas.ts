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
