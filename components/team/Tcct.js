import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Tcct/ADITYA_KRISHNA.webp",
      name: "ADITYA KRISHNA",
      pos: "HEAD",
      linkedin: "",
    },
    {
      id: "2",
      image: "/teams/Tcct/AMAL_KR.webp",
      name: "AMAL KR",
      pos: "HEAD",
      linkedin: "",
    },
    {
      id: "3",
      image: "/teams/Tcct/KOLACHANA_SRUTHI.webp",
      name: "KOLACHANA SRUTHI",
      pos: "HEAD",
      linkedin: "",
    },
    {
      id: "4",
      image: "/teams/Tcct/VISHNU_AJAY.webp",
      name: "VISHNU AJAY",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/vishnu-ajay/",
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
