type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const FacebookIcon = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 24 25"
      fill={_color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12.3945" r="11.5" stroke="white" />
      <path
        d="M12.9301 18.3926V12.9286H14.7734L15.0474 10.7893H12.9301V9.42664C12.9301 8.80931 13.1021 8.38664 13.9881 8.38664H15.1107V6.47931C14.5645 6.42077 14.0154 6.39251 13.4661 6.39464C11.8367 6.39464 10.7181 7.38931 10.7181 9.21531V10.7853H8.88672V12.9246H10.7221V18.3926H12.9301Z"
        fill="white"
      />
    </svg>
  );
};
