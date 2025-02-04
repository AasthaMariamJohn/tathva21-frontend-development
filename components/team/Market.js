import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Marketing/Jijo_Ponnachan.webp",
      name: "Jijo Ponnachan",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/jijo-ponnachan-7aab82187",
    },
    {
      id: "2",
      image: "/teams/Marketing/swathy_suresh_b.webp",
      name: "Swathy Suresh B",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/swathy-suresh-",
    },
    {
      id: "3",
      image: "/teams/Marketing/Akhilesh.webp",
      name: "Akhilesh",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/akhilesh-ks",
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
