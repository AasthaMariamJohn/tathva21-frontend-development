import { Image } from "@chakra-ui/react";
import style from "./indexcard.module.css";
import Link from "next/link";
import moment from "moment";
export default function Indexcard(workshop) {
  const today = moment().format("DD-MM-yyyy h:mm:ss a");
  const status = moment(today, "DD-MM-yyyy h:mm:ss a").isBefore(
    moment(
      moment(workshop.details.regEndDate).format("DD-MM-yyyy h:mm:ss a"),
      "DD-MM-yyyy h:mm:ss a"
    )
  );
  return (
    <div className={style.section}>
      {status ? (
        <>
          <Link href={`/workshops/${workshop.details.slug}`} passHref>
            <Image
              src={workshop.details.coverImage.src}
              className={style.img}
            />
          </Link>
        </>
      ) : (
        <>
          <Image src={workshop.details.coverImage.src} className={style.img} />
        </>
      )}

      {status ? (
        <div className={style.btn}>
          <Link href={`/workshops/${workshop.details.slug}`} passHref>
            <button className={style.btn1}> EVENT DETAILS</button>
          </Link>
          <button
            className={style.btn2}
          >{`Rs: ${workshop.details.price}`}</button>
        </div>
      ) : (
        <div className={style.btn}>
          <button className={style.btn1}> EVENT DETAILS</button>
          <button className={style.btn2}>{`Closed`}</button>
        </div>
      )}
      {status ? (
        <Link href={`/workshops/${workshop.details.slug}`} passHref>
          <h3 className={style.title}>{workshop.details.name}</h3>
        </Link>
      ) : (
        <h3 className={style.title}>{workshop.details.name}</h3>
      )}
      {/* <div className={style.content}>
        <p>{`${workshop.details.description.slice(0, 50)} .....`}</p>
      </div> */}
    </div>
  );
}
