import { useProfileContext } from "@/context/profileContext";
import { useUserContext } from "@/context/userContext";
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
import { ToastContainer,toast } from "react-toastify";

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
  useEffect(() => {
    if (user) getMe(user.jwt, setUserProfile);
    toast.warn("Name can be updated only once", {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [user]);

  function Cancel() {
    setInEditMode(false);
    reRender();
  }
  return (
    <div className={styles["profile-page"]}>
      {userProfile ? (
        <div className={styles["profile"]}>
          <div
            className={styles["save-icon"]}
            onClick={() => {
              setInEditMode(false);
              updateMe(user, allInOne);
            }}
          >
            {inEditMode ? <AiOutlineSave style={{color:"white"}}/> : <></>}
          </div>
          <div
            className={styles["edit-icon"]}
            onClick={() => {
              if (!inEditMode) setInEditMode(true);
              else {
                Cancel();
              }
            }}
          >
            {inEditMode ? <ImCancelCircle style={{color:"white"}}/> : <AiOutlineEdit style={{color:"white"}}/>}
          </div>
          <table className={styles["table"]}>
            <tbody>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Name</td>
                <td className={styles["table-cell"]}>
                  <NameInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Phone</td>
                <td className={styles["table-cell"]}>
                  <PhoneInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>State</td>
                <td className={styles["table-cell"]}>
                  <StateInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>District</td>
                <td className={styles["table-cell"]}>
                  <DistrictInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>College/School</td>
                <td className={styles["table-cell"]}>
                  <CollegeNameInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Year of Study</td>
                <td className={styles["table-cell"]}>
                  <YearOfStudyInput />
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Tathva Id</td>
                <td className={styles["table-cell"]}>
                  <TathvaIdInput />
                </td>
              </tr>
            </tbody>
          </table>
          <ToastContainer/>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}