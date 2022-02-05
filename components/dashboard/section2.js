import styles from "./section2.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
import moment from "moment";
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
    setImage(e);
  }
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

     
      {/* {(submissionStatus === "not" && <>submission not started</>)}
      {(submissionStatus === "available" && <>poyi submit chey</>)}
      {submissionStatus === "closed" && <>submission closed</>} */}
      {submissionStatus === "available" && questions ? (
        <div>
          <h1>Questions</h1>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                <p>
                  {question.question} {question.submissionType}{" "}
                  {question.maxfileupload} {question.filetypes}
                </p>
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
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                  </form>
                ) : (
                  <form>
                    <input
                      value={textInput}
                      onChange={(e) => {
                        setTextInput(e.target.value);
                      }}
                    ></input>
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
