import Image from "next/image";
import styles from "./sponsors.module.css";
export default function Sponsers() {
  return (
    <div className={styles["main"]}>
      <div className={styles["heading"]}>
        <h1>Sponsors</h1>
      </div>
      <div className={styles["sponsor"]}>
        <div className={styles["sponsorImg"]}>
          <p>Coding Partner</p>
          <Image
            src={"/cn.png"}
            alt="next-image"
            width={"400vw"}
            height={"200vh"}
          />
          <br />
          <p>Previous Sponsors</p>
          <div className={styles["sponsor-images"]}>
            <Image
              src={"/images/sponsor1.jpg"}
              alt="next-image"
              width={"2000vw"}
              height={"1000vh"}
            />
            <Image
              src={"/images/sponsor2.jpg"}
              alt="next-image"
              width={"2000vw"}
              height={"1000vh"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
