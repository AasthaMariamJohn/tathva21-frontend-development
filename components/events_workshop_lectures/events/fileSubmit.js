import axios from "axios";
import { useState } from "react";
export default function FileUpload({ jwt }) {
  const refId = 2;
  const [image, setImage] = useState(null);

  function handleChange(e) {
    setImage(e.target.files[0]);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("refId", refId);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      }
    );

    console.log("image uploaded");
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
