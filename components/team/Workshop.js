import Image from "next/image";
import styles from "./team.module.css";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Workshop/MALAVIKA SAJEEV.jpg",
      name: "MALAVIKA SAJEEV",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "/teams/Workshop/SHALOOB M.jpg",
      name: "SHALOOB M",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "/teams/Workshop/Mohamed Niyas A.jpg",
      name: "Mohamed Niyas A",
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
