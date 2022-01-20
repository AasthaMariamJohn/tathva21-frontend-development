import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/PRC/CA/Hima K Vasudevan.jpg",
      name: "Hima K Vasudevan",
      pos: "CA",
    },
    {
      id: "2",
      image: "/teams/PRC/CA/Vishnu Vijay.jpg",
      name: "Vishnu Vijay",
      pos: "CA",
    },
    {
      id: "3",
      image: "/teams/PRC/event and pr/Akshara Biju.jpg",
      name: "Akshara Biju",
      pos: "Event & PR",
    },
    {
      id: "4",
      image: "/teams/PRC/EVENT AND PR/Bhavana.jpeg",
      name: "Bhavana",
      pos: "Event & PR",
    },
    {
      id: "5",
      image: "/teams/PRC/event and pr/Vishnuprasad R Nair.jpg",
      name: "Vishnuprasad R Nair",
      pos: "Event & PR",
    },
    {
      id: "6",
      image: "/teams/PRC/outreach/Abhay R.jpg",
      name: "Abhay R",
      pos: "OutReach",
    },
    {
      id: "7",
      image: "/teams/PRC/outreach/Aditya Anand.jpg",
      name: "Aditya Anand",
      pos: "OutReach",
    },
    {
      id: "8",
      image: "/teams/PRC/outreach/Anagha Ashok.jpg",
      name: "Anagha Ashok",
      pos: "OutReach",
    },
    {
      id: "9",
      image: "/teams/PRC/outreach/Busarla Desika.jpg",
      name: "Busarla Desika",
      pos: "OutReach",
    },

    {
      id: "10",
      image: "/teams/PRC/outreach/Manish kumar.jpg",
      name: "Manish kumar",
      pos: "OutReach",
    },
    {
      id: "11",
      image: "/teams/PRC/outreach/Saran Josh.jpg",
      name: "Saran Josh",
      pos: "OutReach",
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
                height={"160px"}
                width={"140px"}
                layout="fill"
              ></Image>
              <div className={styles.overlay}></div>
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
