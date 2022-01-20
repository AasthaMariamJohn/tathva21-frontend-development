import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Lecture/Haris_Muhammed_S.webp",
      name: "Haris Muhammed S",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/haris-muhammed-85053a190",
    },
    {
      id: "2",
      image: "/teams/Lecture/Mohammed_Mirza_K_K.webp",
      name: "Mohammed Mirza K K",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/mohammed-m-09084b10a",
    },
    {
      id: "3",
      image: "/teams/Lecture/Manu_Narayanan.webp",
      name: "Manu Narayanan",
      pos: "HEAD",
      linkedin: "",
    },
    {
      id: "4",
      image: "/teams/Lecture/Midhunkrishnan_P_U.webp",
      name: "Mohammed Mirza K K",
      pos: "HEAD",
      linkedin: "",
    },
    {
      id: "5",
      image: "/teams/Lecture/Vimal_Joshy.webp",
      name: "Vimal Joshy",
      pos: "HEAD",
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
