import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
export default function FileUpload({ jwt, refId }) {
  const [image, setImage] = useState(null);

  function handleChange(e) {
    setImage(e.target.files[0]);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("refId", refId);
    if (!image) return;

    const id = toast.loading("Please wait...");

    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`, formData, {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
      .then(() => {
        toast.update(id, {
          render: "Submission Added",
          type: "success",
          isLoading: false,
          autoClose:2000,
        });
      });
  }
  return (
    <>
      <form>
        <div>
          <input type="file" onChange={handleChange} />
        </div>
        <input
          type="submit"
          value="Upload"
          onClick={handleSubmit}
          className="btn"
        />
      </form>
    </>
  );
}
