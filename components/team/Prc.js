import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/PRC/CA/Hima K Vasudevan.webp",
      name: "Hima K Vasudevan",
      pos: "CA",
      linkedin: "https://www.linkedin.com/in/hima-k-vasudevan-129462190",
    },
    {
      id: "2",
      image: "/teams/PRC/CA/Vishnu Vijay.webp",
      name: "Vishnu Vijay",
      pos: "CA",
      linkedin: "https://www.linkedin.com/in/vishnu-vijay-8453b7187/",
    },
    {
      id: "3",
      image: "/teams/PRC/event and pr/Akshara Biju.webp",
      name: "Akshara Biju",
      pos: "Event & PR",
      linkedin: "https://www.linkedin.com/in/akshara-biju-3993671a5",
    },
    {
      id: "4",
      image: "/teams/PRC/event and pr/Bhavana.webp",
      name: "Bhavana",
      pos: "Event & PR",
      linkedin: "https://www.linkedin.com/in/bhavana-ketavath-164989212",
    },
    {
      id: "5",
      image: "/teams/PRC/event and pr/Vishnuprasad R Nair.webp",
      name: "Vishnuprasad R Nair",
      pos: "Event & PR",
      linkedin: "https://www.linkedin.com/in/vishnuprasad-r-nair-2b3635190",
    },
    {
      id: "6",
      image: "/teams/PRC/outreach/ABHAY R.webp",
      name: "Abhay R",
      pos: "OutReach",
      linkedin: "https://www.linkedin.com/in/abhay-r-76153b166",
    },
    {
      id: "7",
      image: "/teams/PRC/outreach/Aditya Anand.webp",
      name: "Aditya Anand",
      pos: "OutReach",
      linkedin: "https://www.linkedin.com/in/aditya-anand-74b661190",
    },
    {
      id: "8",
      image: "/teams/PRC/outreach/Anagha Ashok.webp",
      name: "Anagha Ashok",
      pos: "OutReach",
      linkedin: "https://www.linkedin.com/in/anagha-ashok-80a467190",
    },
    {
      id: "9",
      image: "/teams/PRC/outreach/Busarla Desika.webp",
      name: "Busarla Desika",
      pos: "OutReach",
      linkedin: "https://www.linkedin.com/in/desika-busarla-066057190",
    },

    {
      id: "10",
      image: "/teams/PRC/outreach/Manish kumar.webp",
      name: "Manish kumar",
      pos: "OutReach",
      linkedin: "http://linkedin.com/in/manish-kumar-77b9051b3",
    },
    {
      id: "11",
      image: "/teams/PRC/outreach/Saran Josh.webp",
      name: "Saran Josh",
      pos: "OutReach",
      linkedin: "https://www.linkedin.com/in/saran-josh-khandavalli-ba227220b",
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
