type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const EmailConfirmation = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 160 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="85.4218"
        cy="67.7968"
        rx="67.7968"
        ry="67.7968"
        fill="#016E7F"
        fill-opacity="0.04"
      />
      <ellipse
        cx="92.2031"
        cy="85.4253"
        rx="67.7968"
        ry="67.7968"
        fill="#016E7F"
        fill-opacity="0.04"
      />
      <ellipse
        cx="67.7968"
        cy="85.4253"
        rx="67.7968"
        ry="67.7968"
        fill="#016E7F"
        fill-opacity="0.04"
      />
      <path
        d="M85.4887 104.311H63.2665C61.7931 104.311 60.38 103.692 59.3381 102.588C58.2963 101.485 57.7109 99.989 57.7109 98.4289V69.0169C57.7109 67.4568 58.2963 65.9606 59.3381 64.8574C60.38 63.7543 61.7931 63.1345 63.2665 63.1345H102.155C103.629 63.1345 105.042 63.7543 106.084 64.8574C107.126 65.9606 107.711 67.4568 107.711 69.0169V86.6641"
        stroke="#016E7F"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.7109 69.0168L82.7109 86.664L107.711 69.0168M93.822 113.135L107.711 98.4288M107.711 98.4288V111.664M107.711 98.4288H95.2109"
        stroke="#016E7F"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
