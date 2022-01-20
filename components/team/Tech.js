import Image from "next/image";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  const imagefile = [
    {
      id: "1",
      image: "1qcEdii_BoByXXZ3hRZTsn5dUoI3Ef1eS",
      name: "Rohit Robin Mampilly",
      pos: "HEAD",
    },
    {
      id: "2",
      image: "1Q7ElNJ5t6DCo7H561XaAQfb8RkMnbt5N",
      name: "Vimal Joseph",
      pos: "HEAD",
    },
    {
      id: "3",
      image: "1oRwXAhBwYmhbvYZJR8XbVvSsJFQTQQ43",
      name: "Aastha Mariam John",
      pos: "FRONT-END",
    },
    {
      id: "4",
      image: "17-jk4-OMkgajMbCJWxQR_jYV0ItN361E",
      name: "Ben Thomas",
      pos: "FULL-STACK",
    },
    {
      id: "5",
      image: "1pdPoX2Z8Co6vXFi1Q0T2x41f4_GOoYr6",
      name: "Joel Robin P",
      pos: "FRONT-END",
    },
    {
      id: "6",
      image: "1HWHgWpl9zGNxRuDuOrBL4agQs04VT0ru",
      name: "Amal Prakash",
      pos: "THREE.JS",
    },
    {
      id: "7",
      image: "1GJ3F7mfA8vCHwFyxssQ--YTwowQagDVK",
      name: "Alias George",
      pos: "FULL-STACK",
    },
    {
      id: "8",
      image: "1e1DjQ41X3VKNSBSm1-o01QT5Q4K6WuaZ",
      name: "Amal P Mathews",
      pos: "FULL-STACK",
    },
    {
      id: "9",
      image: "1P4VocyQuzPSFwiZL8-RhsaVBUNG5uq5a",
      name: "Emmanuel Christo",
      pos: "FRONT-END",
    },

    {
      id: "10",
      image: "14jdmUbKLtih21CnAN8XuPEIitGx5aaDu",
      name: "Amal Krishna",
      pos: "FRONT-END",
    },
    {
      id: "11",
      image: "16A_qeSxrfInYX2RkNgXyPMfuBl1AG4rh",
      name: "Akhil Dev M S",
      pos: "FRONT-END",
    },
    {
      id: "12",
      image: "1HmEO6l9znYiAc4N30HYeKSr77S1QoAAs",
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
                src={`https://drive.google.com/uc?id=${img.image}`}
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
