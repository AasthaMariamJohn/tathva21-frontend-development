import ComingSoon from "@/components/common/coming_soon";
import Loader from "@/components/common/loader";
import Overlay from "@/components/common/overlay";
import getLectures from "@/lib/lectures/getLectures";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Lectures() {
  const [lectures, setLectures] = useState(null);
  const router = useRouter();
  const { refCode } = router.query;
  useEffect(() => {
    if (lectures == null) {
      async function test() {
        let data = await getLectures();
        setLectures(data);
      }
      test();
    }
  }, []);
  useEffect(() => {
    if (refCode) setRefCode(refCode);
  }, [refCode]);

  return (
    <div>
      <Overlay>
        <Head>
          <title>Lecture</title>
        </Head>
        {/* <ComingSoon event={"Lectures"} time={"05 26 2029, 6:00 am"} /> */}
        {lectures ? <EwlFrontPage workshop={lectures} type={"lectures"} /> : <Loader />}
      </Overlay>
    </div>
  );
}

import { Image } from "@chakra-ui/react";
import Link from "next/link";

import style from "@/components/events_workshop_lectures/indexcard.module.css";

function EwlFrontPage({workshop,type}) {
  return (
    <>
      <div className={style.box}>
        <div className={style.grid}>
          {workshop.map((each) => {
            return <Indexcard key={each} workshop={each} type={type}/>;
          })}
        </div>
      </div>
    </>
  );
}

function Indexcard({workshop,type}) {
  return (
    <div className={style.section}>
      <Link href={`/${type}/${workshop  .slug}`} passHref>
        <Image src={workshop.coverImage.src} className={style.img} alt="next-image"/>
      </Link>
      <div className={style.btn}>
        <Link href={`/${type}/${workshop.slug}`} passHref>
          <button className={style.btn1}> EVENT DETAILS</button>
        </Link>
        <button
          className={style.btn2}
        >{`Rs: ${workshop.price}`}</button>
      </div>
      <Link href={`/${type}/${workshop.slug}`} passHref>
        <h3 className={style.title}>{workshop.name}</h3>
      </Link>
      {/* <div className={style.content}>
        <p>{`${workshop.description.slice(0, 50)} .....`}</p>
      </div> */}
    </div>
  );
}
