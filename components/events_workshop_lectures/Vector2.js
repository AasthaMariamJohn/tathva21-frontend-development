import style from "./ewl.module.css";

export default function Vector2() {
  return (
    <svg
      className={style.vector_2}
      width="300"
      height="206"
      viewBox="0 0 300 206"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.52786 148.556L6.99997 159.5V85L1.65878 94.3471C1.22708 95.1026 1 95.9577 1 96.8278V146.32C1 147.096 1.18073 147.861 1.52786 148.556Z"
        fill="#49E9FF"
        fill-opacity="0.32"
      />
      <path
        d="M300 205H12C9.23855 205 6.99997 202.761 6.99997 200V159.5M6.99997 0V85M6.99997 159.5L1.52786 148.556C1.18072 147.861 1 147.096 1 146.32V96.8278C1 95.9577 1.22707 95.1026 1.65878 94.3471L6.99997 85M6.99997 159.5V85"
        stroke="#49E9FF"
        stroke-opacity="0.54"
      />
    </svg>
  );
}
