import style from "./db.module.css"
import { MdAlarm } from "react-icons/md";
import { Center, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function EventComponent({event}) {
  const eventdetails = {
    info: event.description,
    rules:event.rules,
    terms:
      "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore.",
  };
  const [body, setBody] = useState(eventdetails.info);

  return (
    <div className={style.main2}>
      <div className={style.img}>
        <Center>
          <div className={style.img_desktop}>
            <Image src={event.coverImage.src} alt="next-image" />
          </div>
        </Center>
        <Center>
          <div className={style.img_mobile}>
            <Image src={event.coverImage.src} alt="next-image" />
          </div>
        </Center>
      </div>
      <div className={style.content}>
        <div className={style.eventname}>
          <h2 className={style.titles}>{event.name}</h2>
          <div className={style.titles}>
            <h3 className={style.titles}>
              <MdAlarm />
            </h3>
            25:03:99
          </div>
        </div>
        <div className={style.eventdetails}>
          <h3 className={style.titles}>
            <button
              onClick={() => {
                setBody(eventdetails.info);
              }}
            >
              INFO
            </button>
          </h3>
          <h3 className={style.titles}>
            <button
              onClick={() => {
                setBody(eventdetails.rules);
              }}
            >
              RULES
            </button>
          </h3>
          <h3 className={style.titles}>
            <button
              onClick={() => {
                setBody(eventdetails.term);
              }}
            >
              TERMS&CONDITIONS
            </button>
          </h3>
        </div>
        <p className={style.des}>{body}</p>
       
      </div>
    </div>
  );
}
