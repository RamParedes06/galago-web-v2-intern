import React from "react";

type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Heart = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.62 21.5049C12.28 21.6249 11.72 21.6249 11.38 21.5049C8.48 20.5149 2 16.3849 2 9.38492C2 6.29492 4.49 3.79492 7.56 3.79492C9.38 3.79492 10.99 4.67492 12 6.03492C13.01 4.67492 14.63 3.79492 16.44 3.79492C19.51 3.79492 22 6.29492 22 9.38492C22 16.3849 15.52 20.5149 12.62 21.5049Z"
        stroke={_color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
