import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Programme committee/ecos/ADITYA KRISHNA.webp",
      name: "ADITYA KRISHNA",
      pos: "ECOS",
      linkedin: "https://www.linkedin.com/in/aditya-krishna-734406212",
    },
    {
      id: "2",
      image: "/teams/Programme committee/ecos/ANAKHA. P. S.webp",
      name: "ANAKHA. P. S",
      pos: "ECOS",
      linkedin: "https://www.linkedin.com/in/anakha-sreenivas-80228a18b",
    },
    {
      id: "3",
      image: "/teams/Programme committee/ecos/Arjun Murali.webp",
      name: "Arjun Murali",
      pos: "ECOS",
      linkedin: "https://www.linkedin.com/in/arjunmurali245",
    },
    {
      id: "4",
      image: "/teams/Programme committee/ecos/John Johnson V.webp",
      name: "John Johnson V",
      pos: "ECOS",
      linkedin: "https://www.linkedin.com/in/john-johnson-v",
    },
    {
      id: "5",
      image: "/teams/Programme committee/pg reps/Bhagya.webp",
      name: "Bhagya",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "6",
      image: "/teams/Programme committee/pg reps/Dhrona Jaine.webp",
      name: "Dhrona Jaine",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "7",
      image: "/teams/Programme committee/pg reps/Muhamed Nabeel.webp",
      name: "Muhamed Nabeel",
      pos: "PG REPS",
      linkedin: "https://www.linkedin.com/in/muhamed-nabeel-b831877a",
    },
    {
      id: "8",
      image: "/teams/Programme committee/pg reps/Pradeep.webp",
      name: "Pradeep",
      pos: "PG REPS",
      linkedin: "https://www.linkedin.com/in/pradeep-ravichandran-725042195",
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
                src={`${img.image}`}
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
