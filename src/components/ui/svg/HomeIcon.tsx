import React from "react";

type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};
export const HomeIcon = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4096 9.78664L16.0662 4.00235C14.6312 2.8764 12.3889 2.86536 10.9651 3.99131L3.62178 9.78664C2.56793 10.6145 1.92889 12.2704 2.15311 13.5729L3.56573 21.8961C3.89085 23.7617 5.65101 25.2298 7.56813 25.2298H19.452C21.3467 25.2298 23.1405 23.7286 23.4656 21.8851L24.8782 13.5619C25.08 12.2704 24.441 10.6145 23.4096 9.78664ZM14.3509 20.8143C14.3509 21.2669 13.9697 21.6422 13.5101 21.6422C13.0504 21.6422 12.6692 21.2669 12.6692 20.8143V17.5027C12.6692 17.0501 13.0504 16.6748 13.5101 16.6748C13.9697 16.6748 14.3509 17.0501 14.3509 17.5027V20.8143Z"
        fill={_color}
      />
    </svg>
  );
};
