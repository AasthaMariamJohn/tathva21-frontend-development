import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "1_STT57YuLkzx-iJt6UafJwRAMC-x0TZM",
      name: "Archith G",
      pos: "TAS",
      linkedin: "https://www.linkedin.com/in/archith-g-4237ba190",
    },
    {
      id: "2",
      image: "1Z9_JWfa1NHrRU54QdcuUIcasowRegrE7",
      name: "Abbad Maliyekkal",
      pos: "Convenor",
      linkedin: "https://www.linkedin.com/in/abbad-maliyekkal-432397212",
    },
    {
      id: "3",
      image: "1wOluE5iMtQjqr-6_2TDD8_syMdk-cE9i",
      name: "Faris Ali",
      pos: "Students Coordinator",
      linkedin: "https://www.linkedin.com/in/frzfaris-ali/",
    },
    {
      id: "4",
      image: "1KXqgrtYl03AfVEalJn-pktetXENBErdy",
      name: "Alex Siby",
      pos: "Treasurer",
      linkedin: "https://www.linkedin.com/in/alex-siby/",
    },
    {
      id: "5",
      image: "1XloboQEeEDHm-SGWnky778Bfz2eskf4_",
      name: "Diya Lizbeth Jose",
      pos: "Treasurer",
      linkedin: "https://www.linkedin.com/in/diya-lizbeth-jose-224800190",
    },
    {
      id: "6",
      image: "1bWzEFIM6XmIs-80Lp58Kvn6MKrLTLskz",
      name: "Sangeeth S U",
      pos: "Treasurer",
      linkedin: "https://www.linkedin.com/in/sangeeth-s-u-070535190/",
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
                src={`https://drive.google.com/uc?id=${img.image}`}
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
