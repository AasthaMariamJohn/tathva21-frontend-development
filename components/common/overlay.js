import styles from './overlay.module.css'
export default function Overlay({ children ,vh=null}) {
  return (
    <div className={styles["overlay-div"]} style={{height:vh?`${vh}vh`:"120vh"}}>
          {children}
    </div>
  );
}
