import { useProfileContext } from "@/context/profileContext";
import { useUserContext } from "@/context/userContext";
import { useState } from "react";
import getMe from "@/lib/profile/getMe";
import updateMe from "@/lib/profile/updateMe";
import {
  CollegeNameInput,
  DistrictInput,
  NameInput,
  PhoneInput,
  StateInput,
  TathvaIdInput,
  YearOfStudyInput,
} from "@/components/profile/inputs";
import { useEffect } from "react";
import styles from "./profile.module.css";
import Loader from "../common/loader";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Box,
  Container,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
export default function Main() {
  const {
    userProfile,
    setUserProfile,
    inEditMode,
    setInEditMode,
    reRender,
    allInOne,
  } = useProfileContext();
  const { user } = useUserContext();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (user) getMe(user.jwt, setUserProfile);
    //  if(!shown){
    //   toast.warn("Name can be updated only once", {
    //     position: "bottom-center",
    //     autoClose: false,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   setShown(true)
    //  }
  }, [user]);

  function Cancel() {
    setInEditMode(false);
    reRender();
  }
  return (
    <Center>
    <div className={styles["profile-page"]}>
      {userProfile ? (
        <div className={styles["profile"]}>

          <Box bg={"blackAlpha.900"} color={"white"}>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>Name</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><NameInput/></Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>Phone</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><PhoneInput/> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>State</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><StateInput/> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>District</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><DistrictInput/> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>College/School</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><CollegeNameInput/> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>Year Of Study</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><YearOfStudyInput /> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
                <Center>Tathav Id</Center>
              </Box>
              <Spacer/>
              <Box>
                <Center><TathvaIdInput /> </Center>
              </Box>
            </Flex>
            <Flex direction={["column","row"]} p={3} >
              <Box  mt={[1.5]}>
              <Button
                  onClick={() => {
                    if (!inEditMode) setInEditMode(true);
                    else {
                      Cancel();
                    }
                  }}
                  backgroundColor={"blackAlpha.100"}
                  variant='outline'  
                  _hover={{ bg: 'grey',color:"black" }}
                >
                  {inEditMode ? <>Cancel</> : <>Edit</>}
                </Button>
              </Box>
              <Spacer/>
              <Box
                  p={4}
                  color={"red"}
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  as="h4"
                >
                  please fill this
                </Box>
                <Spacer/>
                <Box>
                 {inEditMode ? (
                  <Button
                    onClick={() => {
                      updateMe(user, allInOne);
                      setInEditMode(false);
                    }}
                    backgroundColor={"blackAlpha.100"}
                    variant='outline'
                    _hover={{ bg: 'grey',color:"black" }}
                  >
                    Save
                  </Button>
                ) : (
                  <></> 
                )}
              </Box>
            </Flex>
          </Box>
        </div>
      ) : (
        <Loader />
      )}
    </div>
    </Center>
  );
}
