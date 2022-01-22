import { useProfileContext } from "@/context/profileContext";
import { Input } from "@chakra-ui/react";
import styles from "./profile.module.css";

export function NameInput() {
  const { name, setName, inEditMode } = useProfileContext();
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? (name ? "disbled" : "") : "disabled"}
      name="name"
      value={name ? name : ""}
      placeholder={name?"":"Name Can be Edited Only Once"}
      onChange={handleNameChange}
    ></Input>
  );
}
export function PhoneInput() {
  const { phoneNumber, setPhoneNumber, inEditMode } = useProfileContext();
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? "" : "disabled"}
      name="phoneNumber"
      value={phoneNumber ? phoneNumber : ""}
      onChange={handlePhoneNumberChange}
    ></Input>
  );
}

export function StateInput() {
  const { state, setState, inEditMode } = useProfileContext();
  function handleStateChange(e) {
    setState(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? "" : "disabled"}
      name="state"
      value={state ? state : ""}
      onChange={handleStateChange}
    ></Input>
  );
}

export function DistrictInput() {
  const { district, setDistrict, inEditMode } = useProfileContext();
  function handleDistrictChange(e) {
    setDistrict(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? "" : "disabled"}
      name="district"
      value={district ? district : ""}
      onChange={handleDistrictChange}
    ></Input>
  );
}
export function CollegeNameInput() {
  const { collegeName, setCollegeName, inEditMode } = useProfileContext();
  function handleCollegeNameChange(e) {
    setCollegeName(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? "" : "disabled"}
      name="collegeName"
      value={collegeName ? collegeName : ""}
      onChange={handleCollegeNameChange}
    ></Input>
  );
}

export function YearOfStudyInput() {
  const { yearOfStudy, setYearOfStudy, inEditMode } = useProfileContext();
  function handleYearOfStudyChange(e) {
    setYearOfStudy(e.target.value);
  }
  return (
    <Input
      disabled={inEditMode ? "" : "disabled"}
      name="yearOfStudy"
      value={yearOfStudy ? yearOfStudy : ""}
      onChange={handleYearOfStudyChange}
    ></Input>
  );
}

export function TathvaIdInput() {
  const { userProfile } = useProfileContext();
  return (
    <Input
      disabled
      name="tathvaId"
      value={userProfile.tathvaId ? userProfile.tathvaId : ""}
    ></Input>
  );
}
