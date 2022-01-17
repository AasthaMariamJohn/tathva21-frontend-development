import style from "../events_workshop_lectures/ewl.module.css";
import { MdAlarm } from "react-icons/md";
import { Center, Image } from "@chakra-ui/react";
import { useState } from "react";
import registerEvent from "@/lib/events/registerEvent";
import displayRazorpay from "@/components/common/razerpay";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import registerLecture from "@/lib/lectures/registerLecture";
import registerWorkshop from "@/lib/workshops/registerWorkshop";
export default function Ewl_component({ event, type }) {
  const eventdetails = {
    info: event.description,
    rules: event.rules,
    terms:
      "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odio, quia exercitationem, illo nihil repudiandae neque commodi provident, quas aspernatur error repellendus esse optio in impedit ad iure quis dolore.",
  };
  const [body, setBody] = useState(eventdetails.info);

  const { user, isLoggedIn } = useUserContext();
  const router = useRouter();

  return (
    <>
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
            {event.regStartDate}
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
                setBody(eventdetails.terms);
              }}
            >
              TERMS&CONDITIONS
            </button>
          </h3>
        </div>
        <p className={style.des}>{body}</p>
        <Center>
          <div
            className={style.button}
            data-augmented-ui
            onClick={() => {
              if (isLoggedIn) {
                if (event.regPrice) {
                  if (type == "event")
                    displayRazorpay(event, user, "event", event.regPrice);
                  else if (type == "workshop")
                    displayRazorpay(event, user, "workshop", event.regPrice);
                  else if (type == "lecture")
                    displayRazorpay(event, user, "lecture", event.regPrice);
                } else {
                  if(type=="event")
                  registerEvent(event, user.id, user.jwt, router);
                  else if(type=="lecture")
                    registerLecture(event, user.id, user.jwt, router)
                  else if(type=="workshop")
                    registerWorkshop(event, user.id, user.jwt, router)
                }
              } else {
                Login(router);
              }
            }}
          >
            REGISTER for {event.regPrice ? <>{event.regPrice}</> : <>Free</>}
          </div>
        </Center>
      </div>
    </>
  );
}
