import styles from "./styles.module.css";
export default function InitialLoader() {
  console.log("video");
  return (
    <div className={styles.video}>
    <video
      autoPlay
      loop
      muted
      preload={"auto"}
      src="/videos/loader.m4v"
      type="video/m4v"
    ></video>
  </div>
  );
}
