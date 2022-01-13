import style from "./navbar.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger.js";

const Navbar = () => {
  const router = useRouter();
  const [title, setTitle] = useState({ title: "Tathva 21", link: "/" });
  const [links, setLinks] = useState([
    { title: "About Us", id: 1, link: "/about" },
    { title: "Events", id: 2, link: "/events" },
    { title: "Workshops", id: 3, link: "/workshops" },
    { title: "Lecture", id: 4, link: "/lectures" },
    { title: "Shop", id: 5, link: "/shop" },
  ]);
  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setTitle({ title: "Tathva'21", link: "/" });
        break;
      case "/events":
        setTitle({ title: "EVENTS", link: "/events" });
        break;
      case "/workshops":
        setTitle({ title: "WORKSHOPS", link: "/workshops" });
        break;
      case "/lectures":
        setTitle({ title: "LECTURES", link: "/lectures" });
        break;
      case "/profile":
        setTitle({ title: "PROFILE", link: "/profile" });
        break;
      case "/about":
        setTitle({ title: "About Us", link: "/about" });
        break;
      case "/shop":
        setTitle({ title: "Shop", link: "/shop" });
        break;
    }
  }, [router]);
  return (
    <div >
      <div className={style.logo}>
        <Link href="/" passHref>
          <Image
            src={"/navbarlogo.png"}
            width="120"
            height="120"
            alt="Tathva"
          ></Image>
        </Link>
      </div>
      <div className={style.navbar}>
        <div
          className={`${style.navbarg} ${style.no1}`}
          data-augmented-ui
        ></div>
        <div className={`${style.navbarg} ${style.no2}`} data-augmented-ui>
          <ol className={style["navbar-list"]}>
            <li className={style["navbar-title"]}>
              <Link href={title.link}>
                <a>{title.title}</a>
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.id} className={style["navbar-link"]}>
                <Link href={link.link}>
                  <a>{link.title}</a>
                </Link>
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
    </div>
     
    
  );
};

export default Navbar;
