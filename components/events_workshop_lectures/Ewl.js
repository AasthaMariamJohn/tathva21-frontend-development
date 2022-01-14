import style from "./ewl.module.css";
import { MdAlarm } from "react-icons/md";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";
import Image from "next/image";

export default function Event() {
  return (
    <div className={style.main}>
      <div className={style.list}>
        <ul>
          <li>AI</li>
          <li>ML</li>
          <li>ROCKET</li>
          <li>SPACEx</li>
          <li>Tesla</li>
          <li>Googe</li>
        </ul>
      </div>
      <div className={style.main2}>
        {/* <Vector1 />
        <Vector2 /> */}

        <div className={style.img}>
          <div className={style.img_desktop}>
            <Image
              src="/herodekstop.png"
              alt="next-image"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={style.img_mobile}>
            <Image
              src="/heromobile.png"
              alt="next-image"
              width={1000}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
        <div className={style.content}>
          <div className={style.eventname}>
            <h2 className={style.titles}>EVENT NAME</h2>
            <div className={style.titles}>
              <MdAlarm />
            </div>
            <h3 className={style.titles}>25:03:99</h3>
          </div>
          <div className={style.eventdetails}>
            <h3 className={style.titles}>INFO</h3>
            <h3 className={style.titles}>RULES</h3>
            <h3 className={style.titles}>TERMS&CONDITIONS</h3>
          </div>
          <p className={style.des}>
            NFT stands for non-fungible token, which basically means that
            it&apos;s a one-of-a-kind digital asset that belongs to you and you
            only. The most po24535pular NFTs right now include artwork and
            music, but can also include viGDG5353deos and even tweets.
          </p>
          <div className={style.button} data-augmented-ui>
            REGISTER
          </div>
        </div>
      </div>
    </div>
  );
}
