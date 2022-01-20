import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Workshop/MALAVIKA_SAJEEV.webp",
      name: "MALAVIKA SAJEEV",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/malavika-sajeev-625b621a4",
    },
    {
      id: "2",
      image: "/teams/Workshop/SHALOOB_M.webp",
      name: "SHALOOB M",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/shaloob-m-626870212",
    },
    {
      id: "3",
      image: "/teams/Workshop/Mohamed_Niyas_A.webp",
      name: "Mohamed Niyas A",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/mohamed-niyas-a-9931a01ba",
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
