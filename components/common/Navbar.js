import style from "./navbar.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger.js";

const Navbar = () => {
  const router = useRouter();
  const [title, setTitle] = useState("Tathva 21");
  const [links, setLinks] = useState([
    { link: "About Us", id: 1, url: "" },
    { link: "Events", id: 2, url: "" },
    { link: "Workshops", id: 3, url: "" },
    { link: "Lecture", id: 4, url: "" },
    { link: "Shop", id: 5, url: "" },
  ]);
  useEffect(() => {
    if (router.asPath == "/") setTitle("Tathva 21");

    switch (router.asPath) {
      case "/":
        setTitle("Tathva 21");
        break;
      case "/events":
        setTitle("EVENTS");
        break;
      case "/workshops":
        setTitle("WORKSHOPS");
        break;
      case "/lectures":
        setTitle("LECTURES");
        break;
      case "/profile":
        setTitle("PROFILE");
        break;
    }
  }, []);
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
        <div className={`${style.navbarg} ${style.no2}`} data-augmented-ui>
          <ol className={style["navbar-list"]}>
            <li className={style["navbar-title"]}>{title}</li>
            {links.map((link) => (
              <li key={link.id} className={style["navbar-link"]}>
                {link.link}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className={style.login} data-augmented-ui>
        Login
      </div>
      <div className={style.hamburger}>
        <Hamburger />
      </div>
    </>
  );
};

export default Navbar;
