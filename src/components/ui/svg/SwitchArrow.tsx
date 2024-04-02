type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const SwitchArrow = ({
  _width = 36,
  _height = 18.6,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M9.3 1L13.5 5.2L9.3 9.4M12.8576 5.2H1.5M5.7 16.6L1.5 12.4L5.7 8.2M2.175 12.4H13.5"
        stroke={_color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
