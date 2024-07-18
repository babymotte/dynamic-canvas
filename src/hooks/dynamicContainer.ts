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
