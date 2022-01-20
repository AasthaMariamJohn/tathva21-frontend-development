import Image from "next/image";
import styles from "./team.module.css";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "/teams/Design/ABIRAJ P Y.jpg",
      name: "ABIRAJ P.Y",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "/teams/Design/AKSHAY B R.jpg",
      name: "AKSHAY BR",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "/teams/Design/ANJANA NAIR S.jpg",
      name: "ANJANA NAIR S",
      pos: "HEAD",
    },
    {
      id: "4",
      image: "/teams/Design/NIHARIKA R M.jpg",
      name: "Niharika R M",
      pos: "HEAD",
    },
    {
      id: "5",
      image: "/teams/Design/SREEHARI B.jpg",
      name: "SREEHARI B",
      pos: "HEAD",
    },
    {
      id: "6",
      image: "/teams/Design/video/Ershaad Parambath.jpg",
      name: "Ershaad Parambath",
      pos: "Video Creator",
    },
    {
      id: "7",
      image: "/teams/Design/video/MUHAMMED ASHIF.jpg",
      name: "Muhammed Ashif",
      pos: "Video Creator",
    },
    {
      id: "8",
      image: "/teams/Design/3D Team/Sangeeth S U.jpg",
      name: "Sangeeth S U",
      pos: "3D",
    },
    {
      id: "9",
      image: "/teams/Design/3D TEAM/ADARSH T R.jpg",
      name: "ADARSH T.R",
      pos: "3D",
    },

    {
      id: "10",
      image: "/teams/Design/3D Team/Love Kush Pranu.jpg",
      name: "Love Kush Pranu",
      pos: "3D",
    },
    {
      id: "11",
      image: "/teams/Design/3D TEAM/SARATH U M.jpg",
      name: "Sarath. U. M",
      pos: "3D",
    },
    {
      id: "12",
      image: "/teams/Design/UI-UX/Jaljith.jpeg",
      name: "Jaljith",
      pos: "UI/UX",
    },
    {
      id: "13",
      image: "/teams/Design/3D TEAM/JUNIORS/ABHINAVE M S.jpg",
      name: "Abhinave M S",
      pos: "JUNIOR",
    },
    {
      id: "14",
      image: "/teams/Design/3D TEAM/JUNIORS/MADHAV UNNIKRISHNAN.jpg",
      name: "Madhav Unnikrishnan",
      pos: "JUNIOR",
    },
    {
      id: "14",
      image: "/teams/Design/3D TEAM/JUNIORS/MUAAD AKMAL.jpg",
      name: "Muaad Akmal",
      pos: "JUNIOR",
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
                  <a href="">
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
