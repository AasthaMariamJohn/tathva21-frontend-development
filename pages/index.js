import Head from "next/head";
import BasicUsage from "@/components/common/eventModal";
import { useEffect, useState } from "react";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
import Teambutton from "@/components/common/teamButton";
import { Badge, Box, Flex, Spacer, styled, Text } from "@chakra-ui/react";
import Info from "@/components/home/info";
import ContactUsLogo from "@/components/common/contactLogo";
import getHomePageInfo from "@/lib/home/test";
import style from "@/components/common/index.module.css";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    async function test() {
      let data = await getHomePageInfo();
      setInfo(data);
      if (data) {
        toast.info(data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    test();
  }, []);
  return (
    <div>
      <Head>
        <title>Tathva 21</title>
      </Head>
      <Box position={"absolute"} bottom={["65", "3"]} left={["0", "10"]}>
        <Flex>
          <Box p={[3, 2]}></Box>
          <Teambutton />
        </Flex>
      </Box>
      {/* 
      <Box position={"absolute"} className={style.news}>
        {info ? <p>{info}</p> : <></>}
      </Box> */}

      <Info />
      <BasicUsage />
      <ContactUsLogo />
      <ToastContainer />
    </div>
  );
}
