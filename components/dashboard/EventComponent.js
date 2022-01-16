import style from "./db.module.css"
import { MdAlarm } from "react-icons/md";
import { Center, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function EventComponent() {
  const eventdetails = {
    info: "Info Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore.",
    rules:
      "Rules Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore.",
    terms:
      "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore.",
  };
  const [body, setBody] = useState(eventdetails.info);

  return (
    <div className={style.main2}>
      <div className={style.img}>
        <Center>
          <div className={style.img_desktop}>
            <Image src="/images/herodekstop.png" alt="next-image" />
          </div>
        </Center>
        <Center>
          <div className={style.img_mobile}>
            <Image src="/images/heromobile.png" alt="next-image" />
          </div>
        </Center>
      </div>
      <div className={style.content}>
        <div className={style.eventname}>
          <h2 className={style.titles}>EVENT NAME</h2>
          <h3 className={style.titles}>
            <h3 className={style.titles}>
              <MdAlarm />
            </h3>
            25:03:99
          </h3>
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
