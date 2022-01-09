import { useUserContext } from "@/context/userContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Login } from "@/lib/common/login";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [inEditMode, setInEditMode] = useState(false);

  const [name, setName] = useState(null)
  const [state, setState] = useState(null)
  const [district, setDistrict] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [collegeName, setCollegeName] = useState(null)
  const [yearOfStudy, setYearOfStudy] = useState(null)

  const { user } = useUserContext();
  useEffect(() => {
    getMe();
  }, []);

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleStateChange(e){
    setState(e.target.value)
  }
  function handleDistrictChange(e){
    setDistrict(e.target.value)
  }
  function handlePhoneNumberChange(e){
    setPhoneNumber(e.target.value)
  }
  function handleYearOfStudyChange(e){
    setYearOfStudy(e.target.value)
  }
  function handleCollegeNameChange(e){
    setCollegeName(e.target.value)
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
          email:res.data.email,
          tathvaId:res.data.tathvaId
        });
        setName(res.data.name)
        setPhoneNumber(res.data.phoneNumber)
        setDistrict(res.data.district)
        setState(res.data.state)
        setYearOfStudy(res.data.yearOfStudy)
        setCollegeName(res.data.collegeName)
      });
    return data;
  }
  function updateMe() {
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user.id}`,{
      name:name,
      yearOfStudy:yearOfStudy,
      collegeName:collegeName,
      state:state,
      phoneNumber:phoneNumber,
      district:district
    },
    {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    }
    )
    .then(res=>{alert('saved successfully')})
  }

  return (
    <div>
      {userProfile ? (
        <div>
          <li>
            Name:
            <input
              disabled={inEditMode? (userProfile.name?"disbled":"" ): "disabled"}
              name="name"
              value={name?name:""}
              onChange={handleNameChange}
            ></input>
          </li>
          <li>
            Email:
            <input
              disabled
              name="email"
              value={userProfile.email?userProfile.email:""}
            ></input>
          </li>
          <li>
            Phone:
            <input
              disabled={inEditMode ? "" : "disabled"}
              name="phoneNumber"
              value={phoneNumber?phoneNumber:""}
              onChange={handlePhoneNumberChange}
            ></input>
          </li>
          <li>
            State:
            <input
              disabled={inEditMode ? "" : "disabled"}
              name="state"
              value={state?state:""}
              onChange={handleStateChange}
            ></input>
          </li>
          <li>
            District:
            <input
              disabled={inEditMode ? "" : "disabled"}
              name="district"
              value={district?district:""}
              onChange={handleDistrictChange}
            ></input>
          </li>
          <li>
            College/School:
            <input
              disabled={inEditMode ? "" : "disabled"}
              name="collegeName"
              value={collegeName?collegeName:""}
              onChange={handleCollegeNameChange}
            ></input>
          </li>
          <li>
            Year of Study:
            <input
              disabled={inEditMode ? "" : "disabled"}
              name="yearOfStudy"
              value={yearOfStudy?yearOfStudy:""}
              onChange={handleYearOfStudyChange}
            ></input>
          </li>
          <li>
            Tathva Id:
            <input
              disabled
              name="tathvaId"
              value={userProfile.tathvaId?userProfile.tathvaId:""}
            ></input>
          </li>
        
          <button
            onClick={() => {
              setInEditMode(true);
            }}
          >
            Edit
          </button>
          {inEditMode?<button onClick={updateMe}>Save</button>:<></>}
        </div>
      ) : (
        <>Hello</>
      )}
    </div>
  );
}


