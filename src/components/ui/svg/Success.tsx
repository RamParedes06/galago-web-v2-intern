type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const Success = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.2085" cy="16.5615" r="16" fill="#F1FBF4" />
      <g clip-path="url(#clip0_1364_48448)">
        <mask
          id="mask0_1364_48448"
          //   style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="7"
          y="7"
          width="19"
          height="19"
        >
          <path
            d="M16.209 24.5614C17.2598 24.5628 18.3004 24.3565 19.2712 23.9543C20.242 23.5522 21.1238 22.9622 21.8658 22.2182C22.6098 21.4762 23.1998 20.5944 23.6019 19.6236C24.004 18.6529 24.2104 17.6122 24.209 16.5614C24.2103 15.5106 24.004 14.47 23.6019 13.4992C23.1998 12.5284 22.6098 11.6467 21.8658 10.9046C21.1238 10.1606 20.242 9.57061 19.2712 9.16848C18.3004 8.76636 17.2598 8.56005 16.209 8.56141C15.1582 8.56007 14.1175 8.76639 13.1468 9.16851C12.176 9.57064 11.2942 10.1606 10.5522 10.9046C9.80822 11.6467 9.21822 12.5284 8.8161 13.4992C8.41397 14.47 8.20765 15.5106 8.20899 16.5614C8.20763 17.6122 8.41394 18.6529 8.81607 19.6236C9.21819 20.5944 9.8082 21.4762 10.5522 22.2182C11.2942 22.9622 12.176 23.5522 13.1468 23.9543C14.1175 24.3564 15.1582 24.5627 16.209 24.5614Z"
            fill="white"
            stroke="white"
            stroke-width="1.6"
            stroke-linejoin="round"
          />
          <path
            d="M13.0088 16.5614L15.4088 18.9614L20.2088 14.1614"
            stroke="black"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </mask>
        <g mask="url(#mask0_1364_48448)">
          <path
            d="M6.60889 6.96143H25.8089V26.1614H6.60889V6.96143Z"
            fill="#2EAE4E"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1364_48448">
          <rect
            width="19.2"
            height="19.2"
            fill="white"
            transform="translate(6.60889 6.96143)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
