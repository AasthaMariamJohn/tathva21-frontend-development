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
          <p>
            Being a part of Tathva gives you a chance to associate yourselves
            with National Institute of Technology Calicut, ranked 25th
            nationwide, thereby building an everlasting relationship with the
            institution, an unavoidable part of Kerala history.Tathva instils a
            sense of hope in the minds of young innovators and shows them that
            dreams can come true after all.
          </p>
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
