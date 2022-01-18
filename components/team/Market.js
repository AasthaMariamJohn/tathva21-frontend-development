import { Image } from "@chakra-ui/react";
import styles from "./team.module.css";
export default function Prc() {
  return (
    <div className={styles.teamssection}>
      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          {" "}
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamimg}>
          <Image src="./images/herodekstop.png" alt="next-image"></Image>
        </div>
        <div className={styles.teaminfo}>
          <h4>Name</h4>
          <h4>Market</h4>
        </div>
      </div>
    </div>
  );
}
