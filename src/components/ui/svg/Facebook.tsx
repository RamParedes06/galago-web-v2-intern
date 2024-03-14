type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Facebook = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 25 25"
      fill={_color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2305 21.2073V13.0113H16.9955L17.4065 9.80231H14.2305V7.75831C14.2305 6.83231 14.4885 6.19831 15.8175 6.19831H17.5015V3.33731C16.6822 3.2495 15.8586 3.20711 15.0345 3.21031C12.5905 3.21031 10.9125 4.70231 10.9125 7.44131V9.79631H8.16553V13.0053H10.9185V21.2073H14.2305Z"
        fill="black"
      />
    </svg>
  );
};
