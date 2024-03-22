import React from "react";
type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

// Used for Facilities in Hotel Gallery Modal
export const CheckBorder = ({
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
        d="M12.0123 5.71846C12.0695 5.77561 12.1149 5.84348 12.1459 5.91819C12.1769 5.9929 12.1928 6.07297 12.1928 6.15384C12.1928 6.23472 12.1769 6.31479 12.1459 6.3895C12.1149 6.46421 12.0695 6.53208 12.0123 6.58923L7.70462 10.8969C7.64746 10.9541 7.5796 10.9995 7.50489 11.0305C7.43018 11.0615 7.3501 11.0774 7.26923 11.0774C7.18836 11.0774 7.10828 11.0615 7.03358 11.0305C6.95887 10.9995 6.891 10.9541 6.83385 10.8969L4.98769 9.05077C4.87222 8.9353 4.80735 8.77868 4.80735 8.61538C4.80735 8.45208 4.87222 8.29547 4.98769 8.18C5.10317 8.06453 5.25978 7.99966 5.42308 7.99966C5.58638 7.99966 5.74299 8.06453 5.85846 8.18L7.26923 9.59154L11.1415 5.71846C11.1987 5.66124 11.2666 5.61585 11.3413 5.58489C11.416 5.55392 11.4961 5.53798 11.5769 5.53798C11.6578 5.53798 11.7379 5.55392 11.8126 5.58489C11.8873 5.61585 11.9552 5.66124 12.0123 5.71846ZM16.5 8C16.5 9.58225 16.0308 11.129 15.1518 12.4446C14.2727 13.7602 13.0233 14.7855 11.5615 15.391C10.0997 15.9965 8.49113 16.155 6.93928 15.8463C5.38743 15.5376 3.96197 14.7757 2.84315 13.6569C1.72433 12.538 0.962403 11.1126 0.653721 9.56072C0.34504 8.00887 0.503466 6.40034 1.10897 4.93853C1.71447 3.47672 2.73985 2.22729 4.05544 1.34824C5.37103 0.469192 6.91775 0 8.5 0C10.621 0.00223986 12.6546 0.845813 14.1544 2.34562C15.6542 3.84542 16.4978 5.87895 16.5 8ZM15.2692 8C15.2692 6.66117 14.8722 5.35241 14.1284 4.23922C13.3846 3.12602 12.3274 2.25839 11.0905 1.74605C9.85356 1.2337 8.49249 1.09965 7.17939 1.36084C5.86629 1.62203 4.66013 2.26674 3.71343 3.21343C2.76674 4.16012 2.12203 5.36629 1.86084 6.67939C1.59965 7.99249 1.7337 9.35356 2.24605 10.5905C2.7584 11.8274 3.62603 12.8846 4.73922 13.6284C5.85241 14.3722 7.16117 14.7692 8.5 14.7692C10.2947 14.7672 12.0153 14.0534 13.2843 12.7843C14.5534 11.5153 15.2672 9.79468 15.2692 8Z"
        fill="#016E7F"
      />
    </svg>
  );
};