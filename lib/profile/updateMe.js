import updateSuccessMessage from "@/components/profile/updateSuccess";
import axios from "axios";

export default function updateMe(user, allInOne) {
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
      updateSuccessMessage();
    });
}
