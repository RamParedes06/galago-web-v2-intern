type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Close = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5003 29.3327C23.8337 29.3327 29.8337 23.3327 29.8337 15.9993C29.8337 8.66602 23.8337 2.66602 16.5003 2.66602C9.16699 2.66602 3.16699 8.66602 3.16699 15.9993C3.16699 23.3327 9.16699 29.3327 16.5003 29.3327Z"
        stroke="#016E7F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7266 19.7732L20.2732 12.2266"
        stroke="#016E7F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.2732 19.7732L12.7266 12.2266"
        stroke="#016E7F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
