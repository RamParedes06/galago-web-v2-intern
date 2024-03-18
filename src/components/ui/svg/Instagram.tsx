type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Instagram = ({
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
        d="M17.9647 9.93215C17.958 9.42723 17.8635 8.92733 17.6854 8.45481C17.5309 8.05625 17.2951 7.69428 16.9928 7.39203C16.6906 7.08979 16.3286 6.85391 15.93 6.69948C15.4636 6.52438 14.9708 6.42971 14.4727 6.41948C13.8314 6.39081 13.628 6.38281 12 6.38281C10.372 6.38281 10.1634 6.38281 9.52671 6.41948C9.02882 6.42978 8.53628 6.52446 8.07005 6.69948C7.67142 6.85381 7.30939 7.08964 7.00714 7.3919C6.70488 7.69416 6.46904 8.05618 6.31471 8.45481C6.13927 8.9209 6.0448 9.41355 6.03538 9.91148C6.00671 10.5535 5.99805 10.7568 5.99805 12.3848C5.99805 14.0128 5.99805 14.2208 6.03538 14.8581C6.04538 15.3568 6.13938 15.8488 6.31471 16.3161C6.4693 16.7147 6.70531 17.0765 7.00767 17.3787C7.31003 17.6808 7.67209 17.9165 8.07071 18.0708C8.53567 18.2529 9.0283 18.3544 9.52738 18.3708C10.1694 18.3995 10.3727 18.4081 12.0007 18.4081C13.6287 18.4081 13.8374 18.4081 14.474 18.3708C14.9721 18.361 15.465 18.2665 15.9314 18.0915C16.3298 17.9369 16.6917 17.7009 16.9939 17.3987C17.2962 17.0965 17.5321 16.7346 17.6867 16.3361C17.862 15.8695 17.956 15.3775 17.966 14.8781C17.9947 14.2368 18.0034 14.0335 18.0034 12.4048C18.002 10.7768 18.002 10.5701 17.9647 9.93215ZM11.996 15.4635C10.2934 15.4635 8.91405 14.0841 8.91405 12.3815C8.91405 10.6788 10.2934 9.29948 11.996 9.29948C12.8134 9.29948 13.5974 9.62419 14.1754 10.2022C14.7533 10.7802 15.078 11.5641 15.078 12.3815C15.078 13.1989 14.7533 13.9828 14.1754 14.5608C13.5974 15.1388 12.8134 15.4635 11.996 15.4635ZM15.2007 9.90415C15.1063 9.90423 15.0128 9.8857 14.9256 9.84962C14.8384 9.81353 14.7591 9.7606 14.6923 9.69385C14.6256 9.6271 14.5727 9.54784 14.5366 9.4606C14.5005 9.37337 14.482 9.27988 14.482 9.18548C14.482 9.09115 14.5006 8.99774 14.5367 8.91059C14.5728 8.82343 14.6257 8.74424 14.6924 8.67754C14.7591 8.61084 14.8383 8.55793 14.9255 8.52183C15.0126 8.48573 15.106 8.46715 15.2004 8.46715C15.2947 8.46715 15.3881 8.48573 15.4753 8.52183C15.5624 8.55793 15.6416 8.61084 15.7083 8.67754C15.775 8.74424 15.8279 8.82343 15.864 8.91059C15.9001 8.99774 15.9187 9.09115 15.9187 9.18548C15.9187 9.58281 15.5974 9.90415 15.2007 9.90415Z"
        fill="white"
      />
      <path
        d="M11.9961 14.3829C13.1018 14.3829 13.9981 13.4866 13.9981 12.3809C13.9981 11.2752 13.1018 10.3789 11.9961 10.3789C10.8905 10.3789 9.99414 11.2752 9.99414 12.3809C9.99414 13.4866 10.8905 14.3829 11.9961 14.3829Z"
        fill="white"
      />
    </svg>
  );
};
