import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";

export default function LoginBtn() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => Login(router)} >Login</button>
    </div>
  );
}
{
  // 
}