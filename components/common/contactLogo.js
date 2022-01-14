import {FcOnlineSupport} from 'react-icons/fc'
import styles from './contactLogo.module.css'
export default function ContactUsLogo() {
  return (
    <div className={styles["contact-logo"]}>
          <FcOnlineSupport style={{fontSize:"50px"}}/>
    </div>
  );
}
