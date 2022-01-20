import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "19qoOR-9XzRNCYGEBU7ayYYC7zDQYPccY",
      name: "Hima K Vasudevan",
      pos: "CA",
    },
    {
      id: "2",
      image: "1l-tIuqlfytkIlWMRPGT71R03GtrNCCMl",
      name: "Vishnu Vijay",
      pos: "CA",
    },
    {
      id: "3",
      image: "1TqmawaayCtRCaBV6T0g-70wTRfEJrsLN",
      name: "Akshara Biju",
      pos: "Event & PR",
    },
    {
      id: "4",
      image: "1Yq9wvgsfjkgfZTbvAqTIccaxCIybMbzj",
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
      image: "1UplH_7hibQfuLQ7ACp7jm17yrBZh9Q_J",
      name: "Abhay R",
      pos: "OutReach",
    },
    {
      id: "7",
      image: "1KHXt87USQ-1Vnw5dpakQxAlsVz1ahPnb",
      name: "Aditya Anand",
      pos: "OutReach",
    },
    {
      id: "8",
      image: "1t-7U8AUZNoxD7QgYbAqBgOM55D6xULrk",
      name: "Anagha Ashok",
      pos: "OutReach",
    },
    {
      id: "9",
      image: "1HZysxnbAKlaN4QrD7siQTUT6CJpWklGq",
      name: "Busarla Desika",
      pos: "OutReach",
    },

    {
      id: "10",
      image: "1ktQX1o9zY4hQiUXhPb9n95RkkghPpUi6",
      name: "Manish kumar",
      pos: "OutReach",
    },
    {
      id: "11",
      image: "1YgejIt1uNpkcyJ1hMMtZLgt3Y4H_wOQA",
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
                src={`https://drive.google.com/uc?id=${img.image}`}
                alt="next-image"
                height={"160px"}
                width={"140px"}
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
