import { Image } from "@chakra-ui/react";
import styles from "./sponsors.module.css";
export default function Sponsers() {
  return (
    <div className={styles["main"]}>
      <div className={styles["heading"]}>
        <h1>Sponsors</h1>
      </div>
      <div className={styles["sponsor"]}>
          <p>Education Partner </p>
          <div className={styles["group2"]}>
          <a href="https://entri.app/courses/gate-coaching/" target=" "><Image
            src={"/sponsor/Logo.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
            link={"https://entri.app/courses/gate-coaching/"}
          />
          <br /> 
          </a>
          </div>
          <p>Coding Partner</p>
          <div className={styles["group2"]}>
          <a href="https://www.codingninjas.com/" target=" ">
          <Image
            src={"/cn.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
          <p>Workshop Sponsor</p>
          <div className={styles["group2"]}>
          <a href="https://entri.app/courses/gate-coaching/" target=" ">
          <Image
            src={"/sponsor/techmaaghilogo.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
          <p>Workshop Partners </p>
          <div className={styles["group1"]}>
          <a href="https://www.linkedin.com/company/dertlab/?originalSubdomain=in" target=" ">
          <Image
            src={"/sponsor/PACELABSilver.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          <a href="https://www.pacelab.tech/" target=" ">
          <Image
            src={"/sponsor/PACELABSilver.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          <a href="http://www.ht-lab.com/" target=" ">
          <Image
            src={"/sponsor/htindia-logo12.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
          <p>Industrial Training and Project Partner</p>
          <div className={styles["group2"]}>
          <a href="https://entri.app/courses/gate-coaching/" target=" ">
          <Image
            src={"/cn.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          <br />
          </a>
          </div>
          <p>Platform Partners  </p>
          <div className={styles["group1"]}>
          <a href="https://www.gather.town/" target=" ">
          <Image
            src={"/sponsor/phpe9mLN5.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          <a href=" https://www.chess.com/" target=" ">
          <Image
            src={"/sponsor/phpe9mLN5.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
          <p>Social Media Partner </p>
          <div className={styles["group2"]}>
          <a href="https://pinklungi.com/" target=" ">
          <Image
            src={"/cn.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
          <p>Beverage Partner  </p>
          <div className={styles["group2"]}>
          <a href="https://entri.app/courses/gate-coaching/" target=" ">
          <Image
            src={"/cn.png"}
            alt="next-image"
            width={"350px"}
            height={"100px"}
          />
          </a>
          <br />
          </div>
      </div>
    </div>
  );
}
