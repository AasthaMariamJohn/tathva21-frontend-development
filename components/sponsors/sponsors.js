import Image from 'next/image';
import styles from './sponsors.module.css'
export default function Sponsers() {
  return (
    <div className={styles["main"]}>
      <div className={styles["heading"]}>
        <h1>Sponsors</h1>
      </div>
      <div className={styles["sponsor"]}>
        <div className={styles["sponsorImg"]}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Image src={"/sponsor1.jpg"} alt='next-image' width={"2000vw"} height={"1000vh"}/>
          <Image src={"/sponsor2.jpg"} alt='next-image' width={"2000vw"} height={"1000vh"}/>
  
        </div>
      </div>
    </div>
  );
}
