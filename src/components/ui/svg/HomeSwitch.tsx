import React from "react";

type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};
export const HomeSwitch = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="37"
      height="40"
      viewBox="0 0 37 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3 12L24.5 16.2L20.3 20.4M23.8576 16.2H12.5M16.7 27.6L12.5 23.4L16.7 19.2M13.175 23.4H24.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
