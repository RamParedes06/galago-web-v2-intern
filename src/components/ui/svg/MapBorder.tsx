import React from "react";
type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};
export const MapBorder = ({
  _width = 13,
  _height = 13,
  _color = "#016e7f",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99994 8.71473C8.86151 8.71473 9.55994 8.01629 9.55994 7.15473C9.55994 6.29316 8.86151 5.59473 7.99994 5.59473C7.13838 5.59473 6.43994 6.29316 6.43994 7.15473C6.43994 8.01629 7.13838 8.71473 7.99994 8.71473Z"
        stroke={_color}
        stroke-width="1.5"
      />
      <path
        d="M3.80985 6.245C4.79485 1.915 11.2099 1.92 12.1899 6.25C12.7649 8.79 11.1849 10.94 9.79985 12.27C8.79485 13.24 7.20485 13.24 6.19485 12.27C4.81485 10.94 3.23485 8.785 3.80985 6.245Z"
        stroke={_color}
        stroke-width="1.5"
      />
    </svg>
  );
};
