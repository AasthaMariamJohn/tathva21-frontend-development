import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Design/ABIRAJ_P_Y.webp",
      name: "ABIRAJ P.Y",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/abiraj-p-y-82143a208",
    },
    {
      id: "2",
      image: "/teams/Design/AKSHAY_B_R.webp",
      name: "AKSHAY BR",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/akshay-br-2103ab212",
    },
    {
      id: "3",
      image: "/teams/Design/ANJANA_NAIR_S.webp",
      name: "ANJANA NAIR S",
      pos: "HEAD",
      linkedin: "http://www.linkedin.com/in/anjana-nair-s-220993212",
    },
    {
      id: "4",
      image: "/teams/Design/NIHARIKA_R_M.webp",
      name: "Niharika R M",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/niharika-r-m-3835181a6",
    },
    {
      id: "5",
      image: "/teams/Design/SREEHARI_B.webp",
      name: "SREEHARI B",
      pos: "HEAD",
      linkedin: "https://www.linkedin.com/in/sreehari-b-74505b199",
    },
    {
      id: "6",
      image: "/teams/Design/video/ERSHAAD_PARAMBATH.webp",
      name: "Ershaad Parambath",
      pos: "Video Creator",
      linkedin: "https://www.linkedin.com/in/ershaad-parambath-744045190",
    },
    {
      id: "7",
      image: "/teams/Design/video/MUHAMMED_ASHIF.webp",
      name: "Muhammed Ashif",
      pos: "Video Creator",
      linkedin: "https://www.linkedin.com/in/muhammed-ashif-p-183b1620a",
    },
    {
      id: "8",
      image: "/teams/Design/video/Anugrah_R.webp",
      name: "Anugrah R",
      pos: "Video Creator",
      linkedin: "https://www.linkedin.com/in/anugrah-r-1b9008133",
    },
    {
      id: "9",
      image: "/teams/Design/3D_Team/SANGEETH_S_U.webp",
      name: "Sangeeth S U",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/sangeeth-s-u-070535190",
    },
    {
      id: "10",
      image: "/teams/Design/3D_Team/ADARSH_T_R.webp",
      name: "ADARSH T.R",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/adarsh-t-r-724778191",
    },

    {
      id: "11",
      image: "/teams/Design/3D_Team/LOVE_KUSH_PRANU.webp",
      name: "Love Kush Pranu",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/lovekush-pranu",
    },
    {
      id: "12",
      image: "/teams/Design/3D_Team/SARATH_U_M.webp",
      name: "Sarath. U. M",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/sarath-u-m-2933ba212",
    },
    {
      id: "13",
      image: "/teams/Design/UI_UX/Jaljith.webp",
      name: "Jaljith",
      pos: "UI/UX",
      linkedin: "",
    },
    {
      id: "14",
      image: "/teams/Design/3D_Team/JUNIORS/ABHINAVE_M_S.webp",
      name: "Abhinave M S",
      pos: "3D",
      linkedin: "https://www.linkedin.com/in/abhinave-m-s-54170121a",
    },
    {
      id: "15",
      image: "/teams/Design/3D_Team/JUNIORS/MADHAV_UNNIKRISHNAN.webp",
      name: "Madhav Unnikrishnan -3D",
      pos: "",
      linkedin: "https://www.linkedin.com/in/madhav-unni-077990202",
    },
    {
      id: "16",
      image: "/teams/Design/3D_Team/JUNIORS/MUAAD_AKMAL.webp",
      name: "Muaad Akmal",
      pos: "3D",
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
