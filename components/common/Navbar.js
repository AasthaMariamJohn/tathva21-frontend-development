import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger.js";
import { useUserContext } from "@/context/userContext";
import LogoutBtn from "../home/logoutBtn";
import LoginBtn from "../home/loginBtn";
import Navbarsvg from "./navbarsvg";
import { Center } from "@chakra-ui/react";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useUserContext();
  const [title, setTitle] = useState({ title: "Tathva 21", link: "/" });
  const [links, setLinks] = useState([
    // { title: "About Us", id: 1, link: "/about" },
    { title: "Events", id: 2, link: "/events" },
    { title: "Workshops", id: 3, link: "/workshops" },
    { title: "Lecture", id: 4, link: "/lectures" },
    { title: "Shop", id: 5, link: "/shop" },
    { title: "Sponsors", id: 6, link: "/sponsors" },
  ]);
  const [collapseDown, setCollapseDown] = useState(false);

  const handleCollapseDown = () => {
    setCollapseDown(true);
  };

  const handleClose = () => {
    setCollapseDown(false);
  };
  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setTitle({ title: "Tathva 21", link: "/" });
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
    <div>
      {!collapseDown && (
        <>
          <div className={style.logo}>
            <div className={`${style.circle} ${style.circle2}`}>
              <div className={style.logo1}>
                <Link href="/" passHref>
                  <a id="logo-link">
                    <Image
                      src={"/logo/navbarlogo.png"}
                      width="120"
                      height="120"
                      alt="Tathva"
                    ></Image>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.navbar}>
            <div className={`${style.navbarsvg}`}>
              <Navbarsvg />
            </div>
            <div className={`${style.navbarg}`}>
              <div className={style["navbar-title"]}>
                <Link href={title.link}>
                  <a id="tathva-title">{title.title}</a>
                </Link>
              </div>
              <div>
                <ol className={style["navbar-list"]}>
                  {links.map((link) => (
                    <li key={link.id} className={style["navbar-link"]}>
                      <Link href={link.link}>
                        <a id={`${link.title}-link`}>{link.title}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className={style.login}>
            {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
          </div>
          <div className={style.hamburger} onClick={handleCollapseDown}>
            <Hamburger />
          </div>
        </>
      )}
      {collapseDown && (
        <>
          <Center>
            <div className={style.menu}>
              <div className={style.logo_menu}>
                <Link href="/" passHref>
                  <Image
                    src={"/logo/navbarlogo.png"}
                    width="120"
                    height="120"
                    alt="Tathva"
                  ></Image>
                </Link>
              </div>
              <div className={style.close} onClick={handleClose}>
                <Image
                  src={"/images/close.png"}
                  width="40"
                  height="40"
                  alt="next-image"
                />
              </div>
              <p className={style["menu-title"]}>
                <Link href={title.link}>
                  <a>{title.title}</a>
                </Link>
              </p>
              <ol className={style["menu-list"]}>
                {links.map((link) => (
                  <li
                    key={link.id}
                    className={style["menu-link"]}
                    onClick={handleClose}
                  >
                    <Link href={link.link}>
                      <a>{link.title}</a>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </Center>
        </>
      )}
    </div>
  );
};

export default Navbar;
