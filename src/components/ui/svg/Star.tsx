type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Star = ({
  _width = 12,
  _height = 13,
  _color = "#ADADAD",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.97357 4.30013C9.94214 4.20756 9.8843 4.12622 9.80717 4.06616C9.73004 4.00609 9.63701 3.96993 9.53957 3.96213L6.68905 3.73563L5.45555 1.00511C5.41626 0.917166 5.35237 0.842471 5.27157 0.790038C5.19077 0.737606 5.09652 0.709678 5.0002 0.709625C4.90389 0.709572 4.80961 0.737397 4.72875 0.78974C4.6479 0.842084 4.58392 0.91671 4.54454 1.00461L3.31103 3.73563L0.460516 3.96213C0.364743 3.96972 0.273184 4.00473 0.196792 4.06299C0.1204 4.12125 0.06241 4.20029 0.0297599 4.29065C-0.00289021 4.381 -0.00881802 4.47885 0.0126857 4.57248C0.0341894 4.66612 0.082214 4.75158 0.151014 4.81863L2.25753 6.87215L1.51252 10.0982C1.4899 10.1958 1.49715 10.298 1.53333 10.3915C1.56951 10.485 1.63295 10.5654 1.71542 10.6224C1.79789 10.6794 1.89558 10.7102 1.99582 10.711C2.09605 10.7118 2.1942 10.6824 2.27753 10.6267L5.00004 8.81166L7.72256 10.6267C7.80773 10.6832 7.90817 10.7123 8.01038 10.7101C8.11258 10.7078 8.21165 10.6744 8.29426 10.6141C8.37687 10.5539 8.43905 10.4698 8.47245 10.3732C8.50584 10.2766 8.50885 10.172 8.48106 10.0737L7.56656 6.87365L9.83457 4.83263C9.98307 4.69863 10.0376 4.48963 9.97357 4.30013Z"
        fill={_color}
      />
    </svg>
  );
};
