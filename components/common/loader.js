import styles from "./loader.module.css";
export default function Loader() {
  return (
    // <div className={styles["loader"]}>
    //   <div className={styles["loader-inner"]}>
    //     <div className={styles["loader-line-wrap"]}>
    //       <div className={styles["loader-line"]}></div>
    //     </div>
    //     <div className={styles["loader-line-wrap"]}>
    //       <div className={styles["loader-line"]}></div>
    //     </div>
    //     <div className={styles["loader-line-wrap"]}>
    //       <div className={styles["loader-line"]}></div>
    //     </div>
    //     <div className={styles["loader-line-wrap"]}>
    //       <div className={styles["loader-line"]}></div>
    //     </div>
    //     <div className={styles["loader-line-wrap"]}>
    //       <div className={styles["loader-line"]}></div>
    //     </div>
    //   </div>
    // </div>
     <div className={styles["windowloader"]}>
      <div className={styles["wrapper"]}>
        <div className={`${styles["circle"]} ${styles["circle2"]}`}>
          
        </div>
      </div>
    </div>
  );
}
