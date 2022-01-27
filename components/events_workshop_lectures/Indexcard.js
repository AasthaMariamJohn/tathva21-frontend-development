import { Image } from "@chakra-ui/react";
import style from "./indexcard.module.css";
import Link from "next/link";
export default function Indexcard(workshop) {
  // console.log(workshop.details);
  return (
    <div className={style.section}>
      <Link href={`/workshops/${workshop.details.slug}`} passHref>
        <Image src={workshop.details.coverImage.src} className={style.img} />
      </Link>
      <div className={style.btn}>
        <Link href={`/workshops/${workshop.details.slug}`} passHref>
          <button className={style.btn1}> EVENT DETAILS</button>
        </Link>
        <button
          className={style.btn2}
        >{`Rs: ${workshop.details.price}`}</button>
      </div>
      <Link href={`/workshops/${workshop.details.slug}`} passHref>
        <h3 className={style.title}>{workshop.details.name}</h3>
      </Link>
      {/* <div className={style.content}>
        <p>{`${workshop.details.description.slice(0, 50)} .....`}</p>
      </div> */}
    </div>
  );
}
