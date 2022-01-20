import style from "./navbarLogo.module.css";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
export default function NavbarLogo() {
  return (
    <div>
      <Link href="/" passHref >
        <div style={{cursor:"pointer"}}  id="logo-link">
          <div className={style.container}></div>
          <div className={style.test}>
            <Image
              src="/logo/White Logo.png"
              width={"85px"}
              height={"85px"}
              alt="next-image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
