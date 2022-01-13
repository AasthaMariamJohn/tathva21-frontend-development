import style from "./navbar.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={style.logo}>
        <Image
          src={"/navbarlogo.png"}
          width="120"
          height="120"
          alt="Tathva"
        ></Image>
      </div>
      <div className={style.navbar}>
        <div
          className={`${style.navbarg} ${style.no1}`}
          data-augmented-ui
        ></div>
        <div
          className={`${style.navbarg} ${style.no2}`}
          data-augmented-ui
        ></div>
      </div>
      <div className={style.login} data-augmented-ui></div>
    </>
  );
};

export default Navbar;
