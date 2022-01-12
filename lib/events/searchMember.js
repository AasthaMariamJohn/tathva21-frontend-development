import axios from "axios";
import { toast } from "react-toastify";
export default function searchMember(tathvaId, jwt, setMember) {
  if (tathvaId.length != 10) return;
  const id = toast.loading("Please wait...");
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${tathvaId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      setMember(res.data);
      toast.update(id, {
        render: res.data.name,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        if (err.response.data.message)
          toast.update(id, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 1000,
          });
      }
    });
}
