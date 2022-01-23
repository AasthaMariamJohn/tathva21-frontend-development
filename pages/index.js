import Head from "next/head";
import BasicUsage from "@/components/common/eventModal";
import { useEffect, useState } from "react";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
import Teambutton from "@/components/common/teamButton";
import { Badge, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Info from "@/components/home/info";
import ContactUsLogo from "@/components/common/contactLogo";
import getHomePageInfo from "@/lib/home/test";
export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();
  const [info, setInfo] = useState(null);
  useEffect(()=>{
    setInfo(getHomePageInfo())
  })
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
      {/* <Box position={"absolute"} top={[1]}>
        <Text>AJbsefhwfh</Text>
      </Box> */}
      <Box position={"absolute"} bottom={["65vh", "50vh"]} left={["0", "50vh"]}>
      <Badge  variant='outline' colorScheme='green'>
        fdkjfdkj
      </Badge>
      </Box>
      <Box position={"absolute"} top={11} left={22}>
      <Badge  variant='outline' colorScheme='green'>
        fdkjfdkj
      </Badge>
      </Box>
     
      <Info />
      <BasicUsage />
      <ContactUsLogo/>
    </div>
  );
}
