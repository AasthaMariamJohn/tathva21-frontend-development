import Overlay from "@/components/common/overlay";
import Dashboard2 from "@/components/dashboard/index/dashbaord2";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { isLoggedIn, user } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn && !user) {
      Login(router);
    }
  }, [isLoggedIn]);
  return (
    <div>
      <Overlay>
        <Dashboard2 />
      </Overlay>{" "}
    </div>
  );
}
