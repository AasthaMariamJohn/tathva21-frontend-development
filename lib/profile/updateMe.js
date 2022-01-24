import updateSuccessMessage from "@/components/profile/updateSuccess";
import axios from "axios";
import {  toast } from "react-toastify";

export default function updateMe(user, allInOne,router) {
  if(!allInOne.name && !allInOne.phoneNumber){
    toast.error("Please fill the form", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return
  }
  axios
    .put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user.id}`,
      {
        name: allInOne.name,
        yearOfStudy: allInOne.yearOfStudy,
        collegeName: allInOne.collegeName,
        state: allInOne.state,
        phoneNumber: allInOne.phoneNumber,
        district: allInOne.district,
      },
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      }
    )
    .then(() => {
      user.name=allInOne.name,
      updateSuccessMessage();
      let to=localStorage.getItem("loginClikedFrom")
      localStorage.removeItem("loginClikedFrom")
      if(to)
        router.push(to)
      else
        router.push("/")
    });
}
