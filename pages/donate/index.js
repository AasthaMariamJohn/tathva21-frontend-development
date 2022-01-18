import Overlay from "@/components/common/overlay";
import styles from "@/components/donate/donate.module.css";
import { BsFillHeartFill } from "react-icons/bs";
import { Image } from "@chakra-ui/react";
const donate = () => {
  return (
    <>
      <Overlay>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.info}>
              <p className={styles.para}>
                Tathva has a history of making noteworthy contributions towards
                various social causes. In 2019, the social initiative wing of
                NSS NITC, Avishkar, in collaboration with Tathva, undertook a
                campaign to provide aid for students from underprivileged
                backgrounds. Zeroth Attempt, a mock JEE test held in 2020, is
                yet another example of a social initiative affiliated with
                Tathva. This year, Tathva aims to provide financial support
                towards Covid treatment and relief activities, primarily through
                the CM fund. The profits from the Tathva Lecture Series will be
                donated to aid our nation in it&apos; s war against the global
                pandemic. We have also included a provision to accept your
                generous contributions to further our cause. Please feel free to
                make a donation as your contribution can make a difference.
              </p>
            </div>
            <div className={styles.img_container}>
              <Image
                src="/images/donate.jpeg"
                alt="Donate"
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button}>
              <p className={styles.donate_text}>Donate</p>
              <BsFillHeartFill className={styles.faHeart} />
            </button>
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default donate;
