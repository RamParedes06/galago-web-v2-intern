type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const CopyLink = ({
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
        d="M16.8083 12.4187V16.1687C16.8083 19.2937 15.5583 20.5437 12.4333 20.5437H8.68335C5.55835 20.5437 4.30835 19.2937 4.30835 16.1687V12.4187C4.30835 9.29367 5.55835 8.04367 8.68335 8.04367H12.4333C15.5583 8.04367 16.8083 9.29367 16.8083 12.4187Z"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.975 7.08532V9.83532C20.975 12.127 20.0584 13.0437 17.7667 13.0437H16.8083V12.4187C16.8083 9.29365 15.5583 8.04365 12.4333 8.04365H11.8083V7.08532C11.8083 4.79365 12.725 3.87698 15.0167 3.87698H17.7667C20.0584 3.87698 20.975 4.79365 20.975 7.08532Z"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
