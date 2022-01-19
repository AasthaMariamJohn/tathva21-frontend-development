import DonateBtn from "@/components/common/donateBtn";
import Head from "next/head";
import BasicUsage from "@/components/common/eventModal";
import { useEffect } from "react";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
import AboutUs from "@/components/common/aboutUs";
import { Box, Flex, Spacer } from "@chakra-ui/react";
export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      if (user.tathvaId) {
        if (user.name == "") {
          Login(router);
        }
      }
    }
  }, [user]);
  return (
    <div>
      <Head>
        <title>Tathva 21</title>
      </Head>
      <Box position={"absolute"} bottom={["3"]} left={["10"]}>
        <Flex>
          <DonateBtn/>
          <Box p={2}></Box>
          <AboutUs />
        </Flex>
      </Box>

      {/* <Overlay>
      <Loader/>
      </Overlay> */}
      <BasicUsage />
    </div>
  );
}
