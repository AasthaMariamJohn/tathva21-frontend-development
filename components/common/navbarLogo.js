import style from "./navbarLogo.module.css";
import { Image } from "@chakra-ui/react";
export default function NavbarLogo() {
  return (
    <>
      <div className={style.container}></div>
      <div className={style.test}>
        <Image
          src="/logo/navbarlogo.png"
          width={"100px"}
          height={"100px"}
          alt=""
        />
      </div>
    </>
  );
}
