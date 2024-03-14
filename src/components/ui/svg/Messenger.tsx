type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Messenger = ({
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
        d="M12.6651 3.21033C7.74513 3.21033 3.75513 6.93933 3.75513 11.5423C3.75513 14.1583 5.04613 16.4943 7.06613 18.0213V21.2103L10.1071 19.5233C10.9181 19.7513 11.7751 19.8733 12.6661 19.8733C17.5861 19.8733 21.5761 16.1433 21.5761 11.5423C21.5751 6.93933 17.5851 3.21033 12.6651 3.21033ZM13.6031 14.3823L11.2981 11.9883L6.86013 14.4423L11.7251 9.27933L14.0301 11.6743L18.4691 9.21933L13.6031 14.3823Z"
        fill="#333333"
      />
    </svg>
  );
};
