import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Tech/Heads/Rohit Robin Mampilly.webp",
      name: "Rohit Robin Mampilly",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "/teams/Tech/Heads/Vimal Joseph.webp",
      name: "Vimal Joseph",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "/teams/Tech/Aastha_Mariam_John.webp",
      name: "Aastha Mariam John",
      pos: "FRONT-END",
    },
    {
      id: "4",
      image: "/teams/Tech/Ben Thomas.webp",
      name: "Ben Thomas",
      pos: "FULL-STACK",
    },
    {
      id: "5",
      image: "/teams/Tech/Joel Robin P.webp",
      name: "Joel Robin P",
      pos: "FRONT-END",
    },
    {
      id: "6",
      image: "/teams/Tech/Amal Prakash.webp",
      name: "Amal Prakash",
      pos: "THREE.JS",
    },
    {
      id: "7",
      image: "/teams/Tech/Alias George.webp",
      name: "Alias George",
      pos: "FULL-STACK",
    },
    {
      id: "8",
      image: "/teams/Tech/Amal_P_Mathews.webp",
      name: "Amal P Mathews",
      pos: "FULL-STACK",
    },
    {
      id: "9",
      image: "/teams/Tech/Emmanuel Christo.webp",
      name: "Emmanuel Christo",
      pos: "FRONT-END",
    },

    {
      id: "10",
      image: "/teams/Tech/Amal Krishna.webp",
      name: "Amal Krishna",
      pos: "FRONT-END",
    },
    {
      id: "11",
      image: "/teams/Tech/Akhil Dev M S.webp",
      name: "Akhil Dev M S",
      pos: "FRONT-END",
    },
    {
      id: "12",
      image: "/teams/Tech/Vaibhav Gupta.webp",
      name: "Vaibhav Gupta",
      pos: "FRONT-END",
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
                alt="next-image"
                height={"180px"}
                width={"180px"}
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
