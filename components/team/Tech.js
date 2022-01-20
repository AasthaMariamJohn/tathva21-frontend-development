import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Tech/Heads/Rohit Robin Mampilly.jpg",
      name: "Rohit Robin Mampilly",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "/teams/Tech/Heads/Vimal Joseph.jpg",
      name: "Vimal Joseph",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "/teams/Tech/Aastha_Mariam_John.jpg",
      name: "Aastha Mariam John",
      pos: "FRONT-END",
    },
    {
      id: "4",
      image: "/teams/Tech/Ben Thomas.jpg",
      name: "Ben Thomas",
      pos: "FULL-STACK",
    },
    {
      id: "5",
      image: "/teams/Tech/Joel Robin P.jpg",
      name: "Joel Robin P",
      pos: "FRONT-END",
    },
    {
      id: "6",
      image: "/teams/Tech/Amal Prakash.jpg",
      name: "Amal Prakash",
      pos: "THREE.JS",
    },
    {
      id: "7",
      image: "/teams/Tech/Alias George.jpg",
      name: "Alias George",
      pos: "FULL-STACK",
    },
    {
      id: "8",
      image: "/teams/Tech/Amal P Mathews.jpg",
      name: "Amal P Mathews",
      pos: "FULL-STACK",
    },
    {
      id: "9",
      image: "/teams/Tech/Emmanuel Christo.jpg",
      name: "Emmanuel Christo",
      pos: "FRONT-END",
    },

    {
      id: "10",
      image: "/teams/Tech/Amal Krishna.jpeg",
      name: "Amal Krishna",
      pos: "FRONT-END",
    },
    {
      id: "11",
      image: "/teams/Tech/Akhil Dev M S.jpg",
      name: "Akhil Dev M S",
      pos: "FRONT-END",
    },
    {
      id: "12",
      image: "/teams/Tech/Vaibhav Gupta.jpg",
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
