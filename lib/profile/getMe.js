import axios from "axios";
export default function getMe(jwt, setUserProfile) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      setUserProfile({
        email: res.data.email,
        tathvaId: res.data.tathvaId,
        name:res.data.name,
        phoneNumber:res.data.phoneNumber,
        district:res.data.district,
        state:res.data.state,
        collegeName:res.data.collegeName,
        yearOfStudy:res.data.yearOfStudy
      });
    });
}
