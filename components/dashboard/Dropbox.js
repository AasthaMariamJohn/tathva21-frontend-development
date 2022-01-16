import style from "./db.module.css";

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
    if (!image) {
      toast.error("Please Select some file", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

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
          autoClose: 3000,
        });
      });
  }
  return (
    <>
      <form>
        <div className={style.dropbox}>
          <span>Drop file here or click to upload</span>
          <div>
            <input
              type="file"
              onChange={handleChange}
              className={style.dropZoneInput}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

// export default function Dropbox(){
//     return(
//         <div className={style.dropbox}>

//             <span >Drop file here or click to upload</span>
//             <input type="file" name="myFile" className={style.dropZoneInput}/>
//         </div>
//     )
// }
