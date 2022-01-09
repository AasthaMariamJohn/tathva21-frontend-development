import { useUserContext } from "@/context/userContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/common/loader";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import styles from "../../components/profile/test.module.css";
import { useRouter } from "next/router";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);

  const [name, setName] = useState(null);
  const [state, setState] = useState(null);
  const [district, setDistrict] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [collegeName, setCollegeName] = useState(null);
  const [yearOfStudy, setYearOfStudy] = useState(null);
  const router = useRouter();

  const { user } = useUserContext();
  useEffect(() => {
    if (user) getMe();
  }, [user, inEditMode]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleStateChange(e) {
    setState(e.target.value);
  }
  function handleDistrictChange(e) {
    setDistrict(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleYearOfStudyChange(e) {
    setYearOfStudy(e.target.value);
  }
  function handleCollegeNameChange(e) {
    setCollegeName(e.target.value);
  }
  function getMe() {
    var data;
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((res) => {
        setUserProfile({
          email: res.data.email,
          tathvaId: res.data.tathvaId,
        });
        setName(res.data.name);
        setPhoneNumber(res.data.phoneNumber);
        setDistrict(res.data.district);
        setState(res.data.state);
        setYearOfStudy(res.data.yearOfStudy);
        setCollegeName(res.data.collegeName);
      });
    return data;
  }
  function updateMe() {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user.id}`,
        {
          name: name,
          yearOfStudy: yearOfStudy,
          collegeName: collegeName,
          state: state,
          phoneNumber: phoneNumber,
          district: district,
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      .then((res) => {
        alert("saved successfully");
      });
  }
  function Cancel() {
    setInEditMode(false);
    // router.reload()
    getMe();
  }
  return (
    <div className={styles["profile-page"]}>
      {userProfile ? (
        <div className={styles["profile"]}>
          <div
            className={styles["save-icon"]}
            onClick={() => {
              updateMe();
              setInEditMode(false);
            }}
          >
            {inEditMode ? <AiOutlineSave /> : <></>}
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
            {inEditMode ? <ImCancelCircle /> : <AiOutlineEdit />}
          </div>
          <table className={styles["table"]}>
            <tbody>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Name</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={
                      inEditMode
                        ? userProfile.name
                          ? "disbled"
                          : ""
                        : "disabled"
                    }
                    name="name"
                    value={name ? name : ""}
                    onChange={handleNameChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Phone</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={inEditMode ? "" : "disabled"}
                    name="phoneNumber"
                    value={phoneNumber ? phoneNumber : ""}
                    onChange={handlePhoneNumberChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>State</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={inEditMode ? "" : "disabled"}
                    name="state"
                    value={state ? state : ""}
                    onChange={handleStateChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>District</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={inEditMode ? "" : "disabled"}
                    name="district"
                    value={district ? district : ""}
                    onChange={handleDistrictChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>College/School</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={inEditMode ? "" : "disabled"}
                    name="collegeName"
                    value={collegeName ? collegeName : ""}
                    onChange={handleCollegeNameChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Year of Study</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled={inEditMode ? "" : "disabled"}
                    name="yearOfStudy"
                    value={yearOfStudy ? yearOfStudy : ""}
                    onChange={handleYearOfStudyChange}
                  ></input>
                </td>
              </tr>
              <tr className={styles["table-row"]}>
                <td className={styles["table-cell"]}>Tathva Id</td>
                <td className={styles["table-cell"]}>
                  <input
                    className={styles["input"]}
                    disabled
                    name="tathvaId"
                    value={userProfile.tathvaId ? userProfile.tathvaId : ""}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      ) : (
        <Loader />
      )}
      <div className={styles["caution"]}>
            Name can be edited only once so be carefull
      </div>
    </div>
  );
}
