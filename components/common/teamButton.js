import styles from "./aboutUs.module.css";
import Link from "next/link";
export default function teamButton() {
  return (
    <>
      <div className={styles["about-us"]}>
        <a href="https://about.tathva.org/">About Us</a>
      </div>
      <div className={styles["team"]}>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </div>
    </>
  );
}
