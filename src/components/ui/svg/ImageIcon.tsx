import React from "react";

type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};
export const ImageIcon = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8333 1.33203H5.83333C5.098 1.33203 4.5 1.93003 4.5 2.66536V10.6654C4.5 11.4007 5.098 11.9987 5.83333 11.9987H13.8333C14.5687 11.9987 15.1667 11.4007 15.1667 10.6654V2.66536C15.1667 1.93003 14.5687 1.33203 13.8333 1.33203ZM5.83333 10.6654V2.66536H13.8333L13.8347 10.6654H5.83333Z"
        fill="#016E7F"
      />
      <path
        d="M3.16634 5.33203H1.83301V13.332C1.83301 14.0674 2.43101 14.6654 3.16634 14.6654H11.1663V13.332H3.16634V5.33203Z"
        fill="#016E7F"
      />
      <path
        d="M8.5 7.9987L7.83333 7.33203L6.5 9.33203H13.1667L10.5 5.33203L8.5 7.9987Z"
        fill="#016E7F"
      />
    </svg>
  );
};
