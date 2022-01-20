import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "1bN_Yk2f5cN_dE6sESXKv-Z40RHazVsgd",
      name: "ADITYA KRISHNA",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "2",
      image: "1ceO3JiLHTs_FMbR5NWqDmbOmj1FH2BM0",
      name: "ANAKHA. P. S",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "3",
      image: "1ZtWXuok9cfY2JjSib4ygDlNj6MccvZkW",
      name: "Arjun Murali",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "4",
      image: "1K_u25GkHE-fltCNhH9CHgv1u8y7_no07",
      name: "John Johnson V",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "5",
      image: "12tgh96r7U0wY8rvO0kLhGxnlHiiGrM2j",
      name: "Bhagya",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "6",
      image: "1YsaDAzdtNVPwm9TXFbaVSfgn__g7id_M",
      name: "Dhrona Jaine",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "7",
      image: "1_FwSjwzFrB6GYOidN5fFUfYzNIBAOUQR",
      name: "Muhamed Nabeel",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "8",
      image: "1FWroVIoiuoO60VcsJlxd2eZBcGHhRXbv",
      name: "Pradeep",
      pos: "PG REPS",
      linkedin: "",
    },
  ];

  return (
    <div className={styles.teamssection}>
      {imagefile.map((img) => (
        <div key={img.id}>
          <div className={styles.teamsection}>
            <div className={styles.teamimg}>
              <div className={styles["image-overlay"]}>
                <p>
                  <a
                    href={`${img.linkedin}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </p>
              </div>
              <Image
                src={`https://drive.google.com/uc?id=${img.image}`}
                height={"160px"}
                width={"140px"}
                alt="next-image"
              ></Image>
            </div>
            <div className={styles.teaminfo}>
              <h4>{img.name}</h4>
              <h4>{img.pos}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
