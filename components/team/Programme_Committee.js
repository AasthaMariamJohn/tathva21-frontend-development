import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Programme committee/ecos/ADITYA KRISHNA.jpeg.jpg",
      name: "ADITYA KRISHNA",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "2",
      image: "/teams/Programme committee/ecos/ANAKHA. P. S.jpg",
      name: "ANAKHA. P. S",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "3",
      image: "/teams/Programme committee/ecos/Arjun Murali.jpg",
      name: "Arjun Murali",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "4",
      image: "/teams/Programme committee/ecos/John Johnson V.jpg",
      name: "John Johnson V",
      pos: "ECOS",
      linkedin: "",
    },
    {
      id: "5",
      image: "/teams/Programme committee/pg reps/Bhagya.jpeg.jpg",
      name: "Bhagya",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "6",
      image: "/teams/Programme committee/pg reps/Dhrona Jaine.jpg",
      name: "Dhrona Jaine",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "7",
      image: "/teams/Programme committee/pg reps/Muhamed Nabeel.jpg",
      name: "Muhamed Nabeel",
      pos: "PG REPS",
      linkedin: "",
    },
    {
      id: "8",
      image: "/teams/Programme committee/pg reps/Pradeep.jpg",
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
