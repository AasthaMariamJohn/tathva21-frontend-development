import styles from "./section2.module.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Section2({ refId, jwt }) {
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
    <div className={styles["section2"]}>
      <div className={styles["note-wrapper"]}>
        <h2>SUBMISSIONS</h2>
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

      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <label for="file1"> Upload file</label>
          <input
            id="file1"
            type="file"
            onChange={handleChange}
            className={styles["file-submit-wrapper"]}
          />
          <label for="text1"> What is the answer for the question?</label>
          <input
            placeholder="answer here"
            className={styles["text-input"]}
            id="text1"
            type="text"
            onChange={() => {}}
          />
          <button
            className={styles["submit-btn"]}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
