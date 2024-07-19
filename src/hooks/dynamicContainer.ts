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

export function useContainerBounds<T extends Element>(
  containerRef: React.RefObject<T | null | undefined> | undefined
) {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);

  React.useEffect(() => {
    const updateSize = () => {
      const parent = containerRef?.current;
      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        setContainerWidth(width);
        setContainerHeight(height);
      }
    };

    window.addEventListener("resize", updateSize);

    const parent = containerRef?.current;
    if (parent) {
      const { width, height } = parent.getBoundingClientRect();
      setContainerWidth(width);
      setContainerHeight(height);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [containerRef]);

  return [containerWidth, containerHeight];
}
