import { useEffect, useState } from "react";
export default function Navbarsvg() {
  const [WindowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    const getWindowDimensions = () => {
      const width = window.screen.width;
      return width;
    };
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <svg
      width={WindowDimensions * .8}
      height="34"
      viewBox={"0 0 " + WindowDimensions * .8 + " 34"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_535_1114)">
        <path
          d="M4 25H198.42C206.903 25 215.247 22.8417 222.666 18.7281L243.328 7.27186C250.747 3.15832 259.09 1 267.573 1H1305"
          stroke="url(#paint0_linear_535_1114)"
          strokeOpacity="0.58"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_535_1114"
          x="0"
          y="0"
          width="1309"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_535_1114"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_535_1114"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_535_1114"
          x1="-389.5"
          y1="25"
          x2="1367.5"
          y2="29.4994"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.0001" stopColor="#1FAEFF" />
          <stop offset="0.9999" stopColor="#00A3FF" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
