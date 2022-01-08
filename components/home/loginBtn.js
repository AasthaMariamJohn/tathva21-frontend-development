import { Login } from "@/lib/common/login";
import { useRouter } from "next/router";

export default function LoginBtn() {
  const router = useRouter();

  function pushTo(href) {
    router.push(href);
  }
  return (
    <div>
      <button onClick={() => Login(pushTo)}>Login</button>
    </div>
  );
}
