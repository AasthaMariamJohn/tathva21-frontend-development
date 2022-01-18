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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Box,
  Container,
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
    <div className={styles["profile-page"]}>
      {userProfile ? (
        <div className={styles["profile"]}>
          {/* <div
            className={styles["save-icon"]}
            onClick={() => {
              updateMe(user, allInOne);
              setInEditMode(false);
            }}
          >
            {inEditMode ? <AiOutlineSave style={{ color: "white" }} /> : <></>}
          </div> */}
          {/* <div
            className={styles["edit-icon"]}
            onClick={() => {
              if (!inEditMode) setInEditMode(true);
              else {
                Cancel();
              }
            }}
          >
            {inEditMode ? (
              <ImCancelCircle style={{ color: "white" }} />
            ) : (
              <AiOutlineEdit style={{ color: "white" }} />
            )}
          </div> */}
          <Table className={styles["table"]} variant={"unstyled"}>
            <TableCaption>
              <Container centerContent>
              <Box pl={9} w={"100%"} display={"flex"} color={"blue.200"} >
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
              </Container>
            </TableCaption>
            <Tbody>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>Name</Td>
                <Td className={styles["table-cell"]}>
                  <NameInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>Phone</Td>
                <Td className={styles["table-cell"]}>
                  <PhoneInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>State</Td>
                <Td className={styles["table-cell"]}>
                  <StateInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>DisTrict</Td>
                <Td className={styles["table-cell"]}>
                  <DistrictInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>College/School</Td>
                <Td className={styles["table-cell"]}>
                  <CollegeNameInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>Year of Study</Td>
                <Td className={styles["table-cell"]}>
                  <YearOfStudyInput />
                </Td>
              </Tr>
              <Tr className={styles["table-row"]}>
                <Td className={styles["table-cell"]}>Tathva Id</Td>
                <Td className={styles["table-cell"]}>
                  <TathvaIdInput />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
