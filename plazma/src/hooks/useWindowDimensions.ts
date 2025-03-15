"use client";

import { useState, useEffect } from "react";

type WindowDimensionType = {
  width: number;
  height: number;
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensionType>(
    { width: 0, height: 0 },
  );

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      const res = {
        width,
        height,
      };

      setWindowDimensions(res);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
