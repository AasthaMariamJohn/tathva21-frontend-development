import styles from './overlay.module.css'
export default function Overlay({ children }) {
  return (
    <div className={styles["overlay-div"]}>
          {children}
    </div>
  );
}
