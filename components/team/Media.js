import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Media/Jishnu Jayarajan.jpeg.jpg",
      name: "Jishnu Jayarajan",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "/teams/Media/Nanditha A.jpg",
      name: "Nanditha A",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "/teams/Media/Samyuktha M Suresh.jpg",
      name: "Samyuktha M Suresh",
      pos: "HEAD",
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
                  <a href="">
                    <BsLinkedin />
                  </a>
                </p>
              </div>
              <Image
                src={`${img.image}`}
                height={"160px"}
                width={"140px"}
                layout="fill"
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
