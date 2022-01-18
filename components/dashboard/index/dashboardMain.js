import { Image, Center } from "@chakra-ui/react";
import styles from "./styles.module.css";

export default function DashboardMain() {
  return (
    <Center>
      <div className={styles["container"]}>
        <div className={styles["slider"]}>
          <div className={styles["slider-track"]}>
            <div className={styles["box"]}>
              <h4 className={styles["event-name-item"]}>Event Name</h4>
              <Image
                src="/images/herodekstop.png"
                alt="aaaa"
                className={styles["game"]}
              />
            </div>
            <div className={styles["box"]}>
              <h4 className={styles["event-name-item"]}>Event Name</h4>
              <Image src="/images/herodekstop.png" alt="aaa" className={styles["game"]} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["mobile-slider"]}>
        <div className={styles["mobile-slide"]}>
            <h4 className={styles["event-name-item"]}>Event Name</h4><Image src="/images/herodekstop.png" alt="" className={styles["game"]}/>
        </div>
        <div className={styles["mobile-slide"]}>
            <h4 className={styles["event-name-item"]}>Event Name</h4><Image src="/images/herodekstop.png" alt="" className={styles["game"]}/>
        </div>
        <div className={styles["mobile-slide"]}>
            <h4 className={styles["event-name-item"]}>Event Name</h4><Image src="/images/herodekstop.png" alt=""  className={styles["game"]}/>
        </div>
      
    </div>

    </Center>
  );
}
