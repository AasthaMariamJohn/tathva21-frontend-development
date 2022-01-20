import axios from "axios";
import { toast } from "react-toastify";
export default function searchMember(tathvaId, jwt, setMember) {
  console.log(tathvaId)
  if (tathvaId.length != 10) return;
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${tathvaId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      setMember(res.data);
      toast.success(res.data.name, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      setMember(null);
      if (err.response.data) {
        if (err.response.data.message)
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
    });
}
