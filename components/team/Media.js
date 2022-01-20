import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Media/Jishnu_Jayarajan.webp",
      name: "Jishnu Jayarajan",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/jishnu-jayarajan-96746a190",
    },
    {
      id: "2",
      image: "/teams/Media/Nanditha_A.webp",
      name: "Nanditha A",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/nanditha-a-107814190",
    },
    {
      id: "3",
      image: "/teams/Media/Samyuktha_M_Suresh.webp",
      name: "Samyuktha M Suresh",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/samyuktha-m-suresh-1aa7b7190/",
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
