type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const MeatballsMenu = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 21 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0C9.125 0 8 1.125 8 2.5C8 3.875 9.125 5 10.5 5C11.875 5 13 3.875 13 2.5C13 1.125 11.875 0 10.5 0ZM18 0C16.625 0 15.5 1.125 15.5 2.5C15.5 3.875 16.625 5 18 5C19.375 5 20.5 3.875 20.5 2.5C20.5 1.125 19.375 0 18 0ZM3 0C1.625 0 0.5 1.125 0.5 2.5C0.5 3.875 1.625 5 3 5C4.375 5 5.5 3.875 5.5 2.5C5.5 1.125 4.375 0 3 0Z"
        fill={_color}
      />
    </svg>
  );
};
