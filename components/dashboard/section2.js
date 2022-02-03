import styles from "./section2.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
export default function Section2({ refId, jwt, submissions }) {
  const [image, setImage] = useState(null);

  function handleChange(e) {
    setImage(e);
  }
  async function handleSubmit(e) {
    if (!image) return;
    e.preventDefault();

    // for(let i = 0; i < image.length; i++) {
    //   formData.append(`images[${i}]`, image[i])
    // }
    for (let i = 0; i < image.length; i++) {
      const formData = new FormData();
      formData.append("files", image[i]);
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
          setImage(null);
          toast.update(id, {
            render: image[i].name + " Added",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        });
    }
  }

  return (
    <div className={styles["section2"]}>
      <div className={styles["note-wrapper"]}>
        <h2>Note</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>

      <div className={styles["file-submit-wrapper"]}>
        <form>
          {/* <input type='file' onChange={handleChange}/> */}
          <FileUploader
            handleChange={handleChange}
            name="file"
            multiple={true}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <h1>Submissions</h1>
        {submissions ? (
          <ul>
            {submissions.map((submission) => (
              <>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}${submission.url}`}
                  >
                    {submission.name}
                  </a>
                </li>
              </>
            ))}
          </ul>
        ) : (
          <p>No Submissions</p>
        )}
      </div>
    </div>
  );
}
