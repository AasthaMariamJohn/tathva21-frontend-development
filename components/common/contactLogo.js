import { Image } from '@chakra-ui/react';
import {FcOnlineSupport} from 'react-icons/fc'
import styles from './contactLogo.module.css'
export default function ContactUsLogo() {
  return (
    <div className={styles["contact-logo"]}>
          <Image src="/logo/contactLogo.svg" alt='contactus-logo' />
    </div>
  );
}
