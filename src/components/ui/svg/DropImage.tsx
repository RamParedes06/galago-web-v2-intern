type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const DropImage = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33594 13.334C5.33594 11.2123 6.17879 9.17742 7.67908 7.67713C9.17937 6.17684 11.2142 5.33398 13.3359 5.33398H50.6693C52.791 5.33398 54.8258 6.17684 56.3261 7.67713C57.8264 9.17742 58.6693 11.2123 58.6693 13.334V30.6673C58.6691 30.8922 58.6404 31.1162 58.5839 31.334C58.6404 31.5517 58.6691 31.7757 58.6693 32.0006V50.6673C58.6693 52.789 57.8264 54.8239 56.3261 56.3242C54.8258 57.8245 52.791 58.6673 50.6693 58.6673H13.3359C11.2142 58.6673 9.17937 57.8245 7.67908 56.3242C6.17879 54.8239 5.33594 52.789 5.33594 50.6673V42.6673C5.33615 42.4424 5.36482 42.2184 5.42127 42.0006C5.36488 41.7829 5.33621 41.5589 5.33594 41.334V13.334ZM13.3199 39.5473C12.3919 39.5633 11.5066 39.606 10.6693 39.67V13.334C10.6693 12.6267 10.9502 11.9485 11.4503 11.4484C11.9504 10.9483 12.6287 10.6673 13.3359 10.6673H50.6693C51.3765 10.6673 52.0548 10.9483 52.5549 11.4484C53.055 11.9485 53.3359 12.6267 53.3359 13.334V29.3766C41.8773 29.7473 33.6026 32.5073 27.7893 36.3713C29.9919 37.1526 32.4559 38.2646 34.8719 39.7206C38.6026 41.9607 42.3946 45.1073 44.9466 49.2753C45.1294 49.574 45.2516 49.9058 45.3061 50.2518C45.3607 50.5977 45.3466 50.951 45.2647 51.2915C45.1827 51.6319 45.0345 51.9529 44.8285 52.2361C44.6224 52.5193 44.3627 52.7592 44.0639 52.942C43.7652 53.1248 43.4334 53.247 43.0875 53.3015C42.7416 53.3561 42.3883 53.342 42.0478 53.26C41.7073 53.1781 41.3863 53.0299 41.1031 52.8238C40.8199 52.6178 40.5801 52.358 40.3973 52.0593C38.4346 48.8513 35.3893 46.2513 32.1253 44.2913C28.8666 42.334 25.5519 41.1126 23.2533 40.5793C20.0152 39.8398 16.6996 39.4942 13.3786 39.55H13.3199V39.5473ZM18.6106 17.302C19.7992 16.4646 21.2153 16.0105 22.6693 16.0007C23.7626 16.0007 25.3439 16.3073 26.7279 17.302C28.2479 18.3953 29.3359 20.198 29.3359 22.6673C29.3359 25.1367 28.2479 26.9366 26.7279 28.03C25.5397 28.8683 24.1235 29.3234 22.6693 29.334C21.5759 29.334 19.9946 29.0273 18.6106 28.03C17.0906 26.9366 16.0026 25.1393 16.0026 22.6673C16.0026 20.198 17.0906 18.398 18.6106 17.302Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};