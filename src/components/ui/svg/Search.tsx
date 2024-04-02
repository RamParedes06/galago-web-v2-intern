type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Search = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5038 11.0002C12.1598 10.6707 11.8249 10.3317 11.4997 9.98363C11.2264 9.70598 11.0619 9.50399 11.0619 9.50399L9.00525 8.52193C9.82864 7.58809 10.2831 6.38593 10.2833 5.14093C10.2833 2.3064 7.97692 -0.000732422 5.14166 -0.000732422C2.3064 -0.000732422 0 2.3064 0 5.14093C0 7.97545 2.3064 10.2826 5.14166 10.2826C6.43662 10.2826 7.617 9.7978 8.52267 9.00525L9.50472 11.0619C9.50472 11.0619 9.70672 11.2264 9.98437 11.4997C10.2686 11.7663 10.6425 12.127 11.0009 12.5038L11.9984 13.5262L12.4421 14.0007L14 12.4428L13.5255 11.9992C13.2471 11.7259 12.8754 11.3631 12.5038 11.0002ZM5.14166 8.81354C3.11658 8.81354 1.46905 7.16601 1.46905 5.14093C1.46905 3.11585 3.11658 1.46831 5.14166 1.46831C7.16674 1.46831 8.81427 3.11585 8.81427 5.14093C8.81427 7.16601 7.16674 8.81354 5.14166 8.81354Z"
        fill="#F9F9F9"
      />
    </svg>
  );
};
