import styles from "./section2.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
import moment from "moment";
import { useRouter } from "next/router";
import {deleteSubmission} from "@/lib/dashboard/deleteSubmission"
export default function Section2({
  refId,
  jwt,
  submissions,
  questions,
  event,
}) {
  const [image, setImage] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [textInput, setTextInput] = useState("");
  function handleChange(e) {
    setImage(e.target.files[0]);
  }
  const router=useRouter()
  async function handleSubmit(e) {
    // if (!image) return;
    e.preventDefault();

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

    for (let i = 0; i < image.length; i++) {
      const formData = new FormData();
      formData.append("files", image[i]);
      formData.append("refId", refId);

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
  }

  useEffect(() => {
    const today = moment().format();

    if (
      moment(today, "DD-MM-yyyy h:mm:ss a").isBefore(
        moment(event.submissionStartDate, "DD-MM-yyyy h:mm:ss a")
      )
    ) {
      setSubmissionStatus("not");
    } else if (
      moment(today, "DD-MM-yyyy h:mm:ss a").isAfter(
        moment(event.submissionStartDate, "DD-MM-yyyy h:mm:ss a")
      ) &&
      moment(today, "DD-MM-yyyy h:mm:ss a").isBefore(
        moment(event.submissionEndDate, "DD-MM-yyyy h:mm:ss a")
      )
    ) {
      setSubmissionStatus("available");
    } else {
      setSubmissionStatus("closed");
    }
  }, [submissionStatus]);

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
      {/* 
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
      </div> */}

      {/* {(submissionStatus === "not" && <>submission not started</>)}
      {(submissionStatus === "available" && <>poyi submit chey</>)}
      {submissionStatus === "closed" && <>submission closed</>} */}
      {submissionStatus === "available" && questions ? (
        <div >
          <ul style={{
          display:"flex",
          flexDirection:"column",
          gap:"2rem",
          alignItems:"flex-start"
        }}>
            {questions.map((question) => (
              <li key={question.id} className={styles["input-li"]}>
                <p>{question.question}</p>
                {question.submissionType === "fileUpload" ? (
                  <form>
                    <FileUploader
                      handleChange={handleChange}
                      name="file"
                      multiple={question.maxfileupload > 1 ? true : false}
                      // maxSize={question.maxfileupload}
                      // disabled={submissions.length}
                      label={"Upload or drop a file right here"}
                      hoverTitle={"Drop here"}
                      types={
                        question.filetypes
                          ? question.filetypes.split(",").map((a) => {
                              return a;
                            })
                          : []
                      }
                    />
                    <button type="submit" onClick={handleSubmit} className={styles["submit-file-btn"]}>
                      Submit
                    </button>
                  </form>
                ) : (
                  <form>
                    <input
                      placeholder="answer here"
                      className={styles["text-input"]}
                      id="text1"
                      type="text"
                      value={textInput}
                      onChange={(e) => {
                        setTextInput(e.target.value);
                      }}
                    />
                  </form>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
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
                  <button onClick={()=>{deleteSubmission(refId,submission.id,jwt,router)}}>Delete</button>
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
