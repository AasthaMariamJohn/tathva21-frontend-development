import Link from "next/link";
import styles from "./donateBtn.module.css";
export default function DonateBtn() {
  return (
    <div className={styles.donate}>
      <Link href="/donate" passHref>
        <h1>Donate</h1>
      </Link>
    </div>
  );
}
