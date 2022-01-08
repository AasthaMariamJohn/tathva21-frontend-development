import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

export default function LogoutBtn() {
      const {setUser,setIsLoggedIn}=useUserContext()
      const router=useRouter()
      function DestroyCookie(){
            destroyCookie(null,'TathvaUser')
      }
      function Logout(){
            DestroyCookie()
            setUser(null)
            setIsLoggedIn(false)
            router.push('/')
      }     
      return (
            <div>
                  <button onClick={Logout}>Logout</button>
            </div>
      )
}
