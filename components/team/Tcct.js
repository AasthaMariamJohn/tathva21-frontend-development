import Image from "next/image";
import styles from "./team.module.css";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Tcct/VISHNU AJAY.jpeg.jpg",
      name: "VISHNU AJAY",
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
                  <a href={`${img.linkedin}`} target={"_blank"}>
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
