import React from "react";

type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const HeartFill = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_4156_4093)">
        <path
          d="M14.62 21.0828C14.28 21.2028 13.72 21.2028 13.38 21.0828C10.48 20.0928 4 15.9628 4 8.9628C4 5.8728 6.49 3.3728 9.56 3.3728C11.38 3.3728 12.99 4.2528 14 5.6128C15.01 4.2528 16.63 3.3728 18.44 3.3728C21.51 3.3728 24 5.8728 24 8.9628C24 15.9628 17.52 20.0928 14.62 21.0828Z"
          fill="#E7EAEB"
          fill-opacity="0.3"
        />
        <path
          d="M14.62 21.0828C14.28 21.2028 13.72 21.2028 13.38 21.0828C10.48 20.0928 4 15.9628 4 8.9628C4 5.8728 6.49 3.3728 9.56 3.3728C11.38 3.3728 12.99 4.2528 14 5.6128C15.01 4.2528 16.63 3.3728 18.44 3.3728C21.51 3.3728 24 5.8728 24 8.9628C24 15.9628 17.52 20.0928 14.62 21.0828Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_4156_4093"
          x="0.25"
          y="0.622803"
          width="27.5"
          height="25.3"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.235294 0 0 0 0 0.25098 0 0 0 0 0.262745 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4156_4093"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.235294 0 0 0 0 0.25098 0 0 0 0 0.262745 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_4156_4093"
            result="effect2_dropShadow_4156_4093"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4156_4093"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
