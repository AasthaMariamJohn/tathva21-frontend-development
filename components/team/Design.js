import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "1hTpzWHLstqe3oIS7qxOw8hdFTTfh79B2",
      name: "ABIRAJ P.Y",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/abiraj-p-y-82143a208",
    },
    {
      id: "2",
      image: "1O701LHdr-MWdBIcfcXW2XsN0r-9lE9A3",
      name: "AKSHAY BR",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/akshay-br-2103ab212",
    },
    {
      id: "3",
      image: "1BQsJdrp9yT0EVQ14YVOMAzAIM_tGkV5l",
      name: "ANJANA NAIR S",
      pos: "HEAD",
      linkedin: "http://www.linkedin.com/in/anjana-nair-s-220993212",
    },
    {
      id: "4",
      image: "1imYZYFV1zjLFs9JHhLXpjiEgv2qPKkCm",
      name: "Niharika R M",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/niharika-r-m-3835181a6",
    },
    {
      id: "5",
      image: "1oOfGo7iRQ5sdbldE7YBgAcVDw0KU99Ua",
      name: "SREEHARI B",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/sreehari-b-74505b199",
    },
    {
      id: "6",
      image: "1AD4CzDt-hf23uN993rGVexY-TkiSuRnh",
      name: "Ershaad Parambath",
      pos: "Video Creator",
      linkedin: "https://www.linkedin.com/in/ershaad-parambath-744045190",
    },
    {
      id: "7",
      image: "1BQlEXDSdf32wLEPP9vXhwt2x4vtHJ7Qy",
      name: "Muhammed Ashif",
      pos: "Video Creator",
      linkedin: "https://www.linkedin.com/in/muhammed-ashif-p-183b1620a",
    },
    {
      id: "8",
      image: "18KhNMQ6g7Rggx1Ax-Rm2HMTxakbWALNU",
      name: "Sangeeth S U",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/sangeeth-s-u-070535190",
    },
    {
      id: "9",
      image: "1KV1yjV7Wp6WUiOnYSofHLIPOLY3FPbRx",
      name: "ADARSH T.R",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/adarsh-t-r-724778191",
    },

    {
      id: "10",
      image: "/teams/Design/3D Team/Love Kush Pranu.jpg",
      name: "Love Kush Pranu",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/lovekush-pranu",
    },
    {
      id: "11",
      image: "19ZpA5wEQL6yvZpa57scl-VSOKnbxTJaA",
      name: "Sarath. U. M",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/sarath-u-m-2933ba212",
    },
    {
      id: "12",
      image: "/teams/Design/UI-UX/Jaljith.jpeg",
      name: "Jaljith",
      pos: "UI/UX",
      linkedin: "",
    },
    {
      id: "13",
      image: "/teams/Design/3D TEAM/JUNIORS/ABHINAVE M S.jpg",
      name: "Abhinave M S",
      pos: "JUNIOR",
      linkedin: "https://www.linkedin.com/in/abhinave-m-s-54170121a",
    },
    {
      id: "14",
      image: "/teams/Design/3D TEAM/JUNIORS/MADHAV UNNIKRISHNAN.jpg",
      name: "Madhav Unnikrishnan",
      pos: "JUNIOR",
      linkedin: "https://www.linkedin.com/in/madhav-unni-077990202",
    },
    {
      id: "14",
      image: "/teams/Design/3D TEAM/JUNIORS/MUAAD AKMAL.jpg",
      name: "Muaad Akmal",
      pos: "JUNIOR",
      linkedin: "https://www.linkedin.com/in/muaad-akmal-04bba5212",
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
