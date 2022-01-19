import { Image } from "@chakra-ui/react";
import Link from "next/link"
import styles from "./contactLogo.module.css";
export default function ContactUsLogo() {
  return (
    <div className={styles["contact-logo"]}>
      <Link href="/contact" passHref>
        <Image src="/logo/contactLogo.svg" alt="contactus-logo" />
      </Link>
    </div>
  );
}
