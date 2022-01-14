import Image from "next/image";
import style from "./ewl.module.css";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";

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
          <Image src="/herodekstop.png" alt="" className={style.img_desktop}  />
          <Image src="/heromobile.png" alt="" className={style.img_mobile} />
        </div>
        <div className={style.content}>
          <div className={style.eventname}>
            <h3 className={style.titles}>EVENT NAME</h3>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31411 0.578528C2.31411 0.425093 2.37506 0.277942 2.48356 0.169447C2.59205 0.0609519 2.7392 0 2.89264 0L7.52086 0C7.67429 0 7.82144 0.0609519 7.92994 0.169447C8.03843 0.277942 8.09939 0.425093 8.09939 0.578528C8.09939 0.731963 8.03843 0.879113 7.92994 0.987608C7.82144 1.0961 7.67429 1.15706 7.52086 1.15706H2.89264C2.7392 1.15706 2.59205 1.0961 2.48356 0.987608C2.37506 0.879113 2.31411 0.731963 2.31411 0.578528ZM4.62822 8.67791C4.62822 8.83135 4.68917 8.9785 4.79767 9.087C4.90616 9.19549 5.05331 9.25644 5.20675 9.25644C5.36018 9.25644 5.50733 9.19549 5.61583 9.087C5.72432 8.9785 5.78528 8.83135 5.78528 8.67791V5.20675C5.78528 5.05331 5.72432 4.90616 5.61583 4.79767C5.50733 4.68917 5.36018 4.62822 5.20675 4.62822C5.05331 4.62822 4.90616 4.68917 4.79767 4.79767C4.68917 4.90616 4.62822 5.05331 4.62822 5.20675V8.67791ZM5.20675 2.31411C4.52299 2.31411 3.84592 2.44879 3.21421 2.71045C2.5825 2.97211 2.00851 3.35564 1.52502 3.83913C1.04153 4.32262 0.658004 4.89661 0.39634 5.52832C0.134677 6.16003 0 6.8371 0 7.52086C0 8.20462 0.134677 8.88168 0.39634 9.5134C0.658004 10.1451 1.04153 10.7191 1.52502 11.2026C2.00851 11.6861 2.5825 12.0696 3.21421 12.3313C3.84592 12.5929 4.52299 12.7276 5.20675 12.7276C6.58766 12.7276 7.91202 12.179 8.88848 11.2026C9.86493 10.2261 10.4135 8.90177 10.4135 7.52086C10.4135 6.13994 9.86493 4.81559 8.88848 3.83913C7.91202 2.86268 6.58766 2.31411 5.20675 2.31411ZM1.15706 7.52086C1.15706 6.98905 1.2618 6.46244 1.46532 5.97111C1.66884 5.47978 1.96713 5.03334 2.34318 4.65729C2.71923 4.28124 3.16567 3.98295 3.657 3.77943C4.14833 3.57591 4.67494 3.47117 5.20675 3.47117C5.73856 3.47117 6.26517 3.57591 6.7565 3.77943C7.24783 3.98295 7.69427 4.28124 8.07031 4.65729C8.44636 5.03334 8.74466 5.47978 8.94818 5.97111C9.15169 6.46244 9.25644 6.98905 9.25644 7.52086C9.25644 8.5949 8.82978 9.62496 8.07031 10.3844C7.31085 11.1439 6.28079 11.5706 5.20675 11.5706C4.1327 11.5706 3.10265 11.1439 2.34318 10.3844C1.58372 9.62496 1.15706 8.5949 1.15706 7.52086ZM10.5847 4.45813C10.6382 4.51331 10.7021 4.55729 10.7727 4.5875C10.8433 4.61772 10.9193 4.63357 10.9961 4.63412C11.0729 4.63468 11.1491 4.61993 11.2201 4.59074C11.2912 4.56156 11.3557 4.51851 11.4099 4.46411C11.4642 4.40972 11.507 4.34507 11.536 4.27393C11.565 4.20279 11.5795 4.1266 11.5788 4.04978C11.578 3.97297 11.5619 3.89708 11.5315 3.82654C11.5011 3.756 11.4569 3.69223 11.4016 3.63894L10.2423 2.4842C10.1888 2.42902 10.1249 2.38504 10.0543 2.35483C9.98366 2.32461 9.90772 2.30876 9.83091 2.30821C9.75409 2.30765 9.67794 2.3224 9.60688 2.35159C9.53583 2.38078 9.4713 2.42382 9.41706 2.47822C9.36282 2.53261 9.31995 2.59726 9.29097 2.6684C9.26198 2.73954 9.24745 2.81574 9.24822 2.89255C9.24899 2.96936 9.26506 3.04525 9.29547 3.11579C9.32589 3.18633 9.37005 3.2501 9.42537 3.30339L10.5847 4.45813Z"
                fill="#B9B9B9"
              />
            </svg>
            <h3 className={style.titles}>dhfghsdfg</h3>
          </div>
          <div className={style.eventdetails}>
            <h3 className={style.titles}>INFO</h3>
            <h3 className={style.titles}>RULES</h3>
            <h3 className={style.titles}>TERMS&CONDITIONS</h3>
          </div>
          <p className={style.des}>
            NFT stands for non-fungible token, which basically means <br />
            that it&apos;s a one-of-a-kind digital asset that belongs to you
            <br />
            and you only. The most po24535pular NFTs right now <br />
            include artwork and music, but can also include <br />
            viGDG5353deos and even tweets.
          </p>
          <div className={style.button} data-augmented-ui>
            REGISTER
          </div>
        </div>
      </div>
    </div>
  );
}
