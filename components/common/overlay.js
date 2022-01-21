import styles from "./overlay.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
export default function Overlay({ children, vh = null }) {
  return (
    <div
      className={styles["overlay-div"]}
      style={{ height: vh ? `${vh}vh` : "100vh" }}
    >
      <div className={styles["overlay-close"]} id="logo-link">
        <Link href={"/"} passHref>
          <AiFillCloseCircle />
        </Link>
      </div>
      {children}
    </div>
  );
}
