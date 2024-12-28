import React from "react";

interface GapProps {
  width?: number;
  height?: number;
}

const Gap = ({ width, height }: GapProps) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default Gap;
