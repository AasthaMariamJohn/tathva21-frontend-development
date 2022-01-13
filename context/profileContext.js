import { createContext, useContext, useState, useEffect } from "react";

const profileContext = createContext();
profileContext.displayName = "ProfileContext";

export function ProfileWrapper({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const [name, setName] = useState(null);
  const [state, setState] = useState(null);
  const [district, setDistrict] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [collegeName, setCollegeName] = useState(null);
  const [yearOfStudy, setYearOfStudy] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);
  useEffect(() => {
    if (userProfile ) {
      setName(userProfile.name);
      setState(userProfile.state);
      setDistrict(userProfile.district);
      setPhoneNumber(userProfile.phoneNumber);
      setCollegeName(userProfile.collegeName);
      setYearOfStudy(userProfile.yearOfStudy);
    }
  }, [userProfile]);
  function reRender(){
    if (userProfile ) {
      setName(userProfile.name);
      setState(userProfile.state);
      setDistrict(userProfile.district);
      setPhoneNumber(userProfile.phoneNumber);
      setCollegeName(userProfile.collegeName);
      setYearOfStudy(userProfile.yearOfStudy);
    }
  }
  return (
    <profileContext.Provider
      value={{
        userProfile: userProfile,
        setUserProfile: setUserProfile,
        name: name,
        setName: setName,
        state: state,
        setState: setState,
        district: district,
        setDistrict: setDistrict,
        phoneNumber: phoneNumber,
        setPhoneNumber: setPhoneNumber,
        collegeName: collegeName,
        setCollegeName: setCollegeName,
        yearOfStudy: yearOfStudy,
        setYearOfStudy: setYearOfStudy,
        inEditMode:inEditMode,
        setInEditMode:setInEditMode,
        reRender:reRender,
        allInOne:{
          name:name,
          phoneNumber:phoneNumber,
          collegeName:collegeName,
          yearOfStudy:yearOfStudy,
          state:state,
          district:district
        }
      }}
    >
      {children}
    </profileContext.Provider>
  );
}
export function useProfileContext() {
  return useContext(profileContext);
}
