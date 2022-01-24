import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from '../common/loginbtn.module.css'

export default function LogoutBtn() {
  const { setUser, setIsLoggedIn, setUserWorkshops } = useUserContext();
  const router = useRouter();
  function DestroyCookie() {
    // console.log('logged out');
    // destroyCookie({}, "TathvaUser");
  }
  function Logout() {
    toast.success("You are logged out", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    DestroyCookie();
    setUser(null);
    setUserWorkshops(null);
    setIsLoggedIn(false);
    router.push("/");
    localStorage.removeItem("TathvaUser");
    localStorage.removeItem("loginClikedFrom");
  }
  return (
    <div>
      <button className={styles.loginout_button} onClick={Logout}>Logout</button>
    </div>
  );
}
