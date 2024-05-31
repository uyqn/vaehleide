import { useEffect, useState } from "react";

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

const getWindowWidthSize = (window: Window) => {
  const width = window.innerWidth;
  if (width < 640) {
    return "sm";
  } else if (width < 768) {
    return "md";
  } else if (width < 1024) {
    return "lg";
  } else if (width < 1280) {
    return "xl";
  } else {
    return "2xl";
  }
};

export const useWindowWidthSizeObserver = () => {
  const [size, setSize] = useState<Size>(getWindowWidthSize(window));

  useEffect(() => {
    const handleResize = () => setSize(getWindowWidthSize(window));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
