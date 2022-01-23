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
import NavbarLogo from "./navbarLogo";
import { useUtilityContext } from "@/context/utilityContext";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useUserContext();
  const {setIsHandBOpen}=useUtilityContext()


  const [title, setTitle] = useState({ title: "Tathva 21", link: "/" });
  const [links, setLinks] = useState([
    { title: "Events", id: 2, link: "/events" },
    { title: "Workshops", id: 3, link: "/workshops/data-science" },
    { title: "Lecture", id: 4, link: "/lectures" },
    { title: "Shop", id: 5, link: "/shop" },
    { title: "Sponsors", id: 6, link: "/sponsors" },
  ]);
  const [collapseDown, setCollapseDown] = useState(false);

  const handleCollapseDown = () => {
    setIsHandBOpen(true)
    setCollapseDown(true);
  };

  const handleClose = () => {
    setIsHandBOpen(false)
    setCollapseDown(false);
  };
  useEffect(() => {
    if(isLoggedIn && links[links.length-1].link!=="/dashboard"){   
      setLinks([
        { title: "Events", id: 2, link: "/events" },
        { title: "Workshops", id: 3, link: "/workshops" },
        { title: "Lecture", id: 4, link: "/lectures" },
        { title: "Shop", id: 5, link: "/shop" },
        { title: "Sponsors", id: 6, link: "/sponsors" },
        {title:  "Dashboard",id:7,link:"/dashboard"}
      ])
    }
    switch (router.asPath.split("/")[1]) {
    
      case "events":
        setTitle({ title: "EVENTS", link: "/events" });
        
        break;
      case "workshops":
        setTitle({ title: "WORKSHOPS", link: "/workshops" });
        
        break;
      case "lectures":
        setTitle({ title: "LECTURES", link: "/lectures" });
       
        break;
      case "profile":
        setTitle({ title: "Profile", link: "/profile" });
        break;
        
      case "dashboard":
        setTitle({ title: "Dashboard", link: "/dashboard" });
        break
        
      default :
        setTitle({ title: "Tathva 21", link: "/" });
      

       
    }
  }, [router,isLoggedIn]);  

  return (
    <div>
      {!collapseDown && (
        <>
          <div className={style.main}>
            <div className={style.logo} id="logo-link">
              <NavbarLogo />
            </div>
            <div className={style.navbar}>
              <div className={`${style.navbarsvg}`}>
                <Navbarsvg />
              </div>
              <div className={`${style.navbarg}`}>
                <div className={style["navbar-title"]}>
                  <Link href={"/"}>
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
                    src={"/logo/navbarlogoblue.png"}
                    width="80px"
                    height="80px"
                    alt="Tathva"
                  ></Image>
                </Link>
              </div>
              <div className={style.close} onClick={handleClose} id="logo-link-mobile">
                <Image
                  src={"/images/close.png"}
                  width="40"
                  height="40"
                  alt="next-image"
                />
              </div>
              <p className={style["menu-title"]} id="tathva-title-mobile">
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
                      <a  id={`${link.title}-link-mobile`}>{link.title}</a>
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
