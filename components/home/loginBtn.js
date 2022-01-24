import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";

import styles from '../common/loginbtn.module.css'

export default function LoginBtn() {
  const router = useRouter();

  return (
    <div>
      <button className={styles.loginout_button} onClick={() => Login(router)} >Login</button>
    </div>
  );
}
{
  // 
}