import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

export default function LogoutBtn() {
  const { setUser, setIsLoggedIn } = useUserContext();
  const router = useRouter();
  function DestroyCookie() {
    console.log("aa");
    destroyCookie(null, "TathvaUser");
  }
  function Logout() {
    console.log('aa');
    DestroyCookie();
    setUser(null);
    setIsLoggedIn(false);
    router.push("/");
  }
  return <button onClick={Logout}>Logout</button>;
}
