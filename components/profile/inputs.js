import { useProfileContext } from "@/context/profileContext";
import styles from "./test.module.css";

export function NameInput() {
  const { name, setName, inEditMode } = useProfileContext();
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? (name ? "disbled" : "") : "disabled"}
      name="name"
      value={name ? name : ""}
      onChange={handleNameChange}
    ></input>
  );
}
export function PhoneInput() {
  const { phoneNumber, setPhoneNumber, inEditMode } = useProfileContext();
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? "" : "disabled"}
      name="phoneNumber"
      value={phoneNumber ? phoneNumber : ""}
      onChange={handlePhoneNumberChange}
    ></input>
  );
}

export function StateInput() {
  const { state, setState, inEditMode } = useProfileContext();
  function handleStateChange(e) {
    setState(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? "" : "disabled"}
      name="state"
      value={state ? state : ""}
      onChange={handleStateChange}
    ></input>
  );
}

export function DistrictInput() {
  const { district, setDistrict, inEditMode } = useProfileContext();
  function handleDistrictChange(e) {
    setDistrict(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? "" : "disabled"}
      name="district"
      value={district ? district : ""}
      onChange={handleDistrictChange}
    ></input>
  );
}
export function CollegeNameInput() {
  const { collegeName, setCollegeName, inEditMode } = useProfileContext();
  function handleCollegeNameChange(e) {
    setCollegeName(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? "" : "disabled"}
      name="collegeName"
      value={collegeName ? collegeName : ""}
      onChange={handleCollegeNameChange}
    ></input>
  );
}

export function YearOfStudyInput() {
  const { yearOfStudy, setYearOfStudy, inEditMode } = useProfileContext();
  function handleYearOfStudyChange(e) {
    setYearOfStudy(e.target.value);
  }
  return (
    <input
      className={styles["input"]}
      disabled={inEditMode ? "" : "disabled"}
      name="yearOfStudy"
      value={yearOfStudy ? yearOfStudy : ""}
      onChange={handleYearOfStudyChange}
    ></input>
  );
}

export function TathvaIdInput() {
  const { userProfile } = useProfileContext();
  return (
    <input
      className={styles["input"]}
      disabled
      name="tathvaId"
      value={userProfile.tathvaId ? userProfile.tathvaId : ""}
    ></input>
  );
}
