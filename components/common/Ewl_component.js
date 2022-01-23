import style from "../events_workshop_lectures/ewl.module.css";
import { Center, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import registerEvent from "@/lib/events/registerEvent";
import displayRazorpay from "@/components/common/razerpay";
import { useUserContext } from "@/context/userContext";
import { Login } from "@/lib/user/login";
import { useRouter } from "next/router";
import registerLecture from "@/lib/lectures/registerLecture";
import registerWorkshop from "@/lib/workshops/registerWorkshop";
import moment from "moment";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function Ewl_component({ event, type }) {
  const eventdetails = {
    info: event.description,
    contacts: event.contacts,
  };

  const { user, isLoggedIn, userEvents, userWorkshops, userLectures } =
    useUserContext();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [info, setInfo] = useState(true);
  const [contact, setContact] = useState(false);
  const [regstatus, setRegstatus] = useState("");

  const openInfo = () => {
    setInfo(true);
    setContact(false);
  };
  const openContact = () => {
    setInfo(false);
    setContact(true);
  };

  useEffect(() => {
    const today = moment().format("DD-MM-yyyy h:mm:ss a");
    console.log(today);
    if (
      moment(today, "DD-MM-yyyy h:mm:ss a").isBefore(
        moment(event.regStartDate, "DD-MM-yyyy h:mm:ss a")
      )
    ) {
      setRegstatus("not");
    } else if (
      moment(today, "DD-MM-yyyy h:mm:ss a").isAfter(
        moment(event.regStartDate, "DD-MM-yyyy h:mm:ss a")
      ) &&
      moment(today, "DD-MM-yyyy h:mm:ss a").isBefore(
        moment(event.regEndDate, "DD-MM-yyyy h:mm:ss a")
      )
    ) {
      setRegstatus("available");
    } else {
      setRegstatus("closed");
    }
  }, [regstatus]);

  return (
    <>
      <div className={style.img}>
        <Center>
          <div>
            <Image
              src={event.coverImage.src}
              alt="next-image"
              className={style.img_desktop}
            />
          </div>
        </Center>
        <div>
          <button onClick={onOpen}>
            <Center>
              <Image
                src={event.coverImage.src}
                className={style.img_mobile}
                alt="next-image"
              />
            </Center>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent bgColor={"black"} color={"white"} fontSize={14}>
          <ModalHeader>{event.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={event.coverImage.src}
              alt="next-image"
              width={"100%"}
              height={"400px"}
              objectFit={"cover"}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <div className={style.content}>
        <div className={style.eventname}>
          <h2 className={style.titles}>{event.name}</h2>
          <div className={style.titles}>
            <h3 className={style.titles} style={{ marginTop: "15px" }}>
              {regstatus === "not" && (
                <>
                  <p>Reg Starts on</p>
                  {event.regStartDate}
                </>
              )}

              {regstatus === "available" && (
                <>
                  <p>Reg Close on</p>
                  {event.regEndDate}
                </>
              )}
              {regstatus === "closed" && (
                <>
                  <p>Reg Closed on</p>
                  {event.regEndDate}
                </>
              )}
            </h3>
          </div>
        </div>
        <div className={style.eventdetails}>
          <h3 className={style.titles} style={{ display: "inline-block" }}>
            <button
              onClick={() => {
                openInfo();
              }}
            >
              INFO
            </button>
          </h3>
          <h3 className={style.titles} style={{ display: "inline-block" }}>
            <button
              onClick={() => {
                openContact();
              }}
            >
              CONTACT
            </button>
          </h3>
        </div>
        {info && (
          <div>
            <Text className={style.des}>{eventdetails.info}</Text>
          </div>
        )}
        {contact && (
          <div>
            <table className={style.contact_table}>
              {eventdetails.contacts.map((contact) => {
                return (
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.phoneNumber}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
        <Center>
          {regstatus === "not" && (
            <>
              <div className={style.button} data-augmented-ui>
                Comming Soon
              </div>
            </>
          )}

          {regstatus === "available" && (
            <>
              <div
                className={style.button}
                data-augmented-ui
                onClick={() => {
                  if (isLoggedIn) {
                    if (event.regPrice) {
                      if (type == "event")
                        displayRazorpay(
                          event,
                          user,
                          "event",
                          event.regPrice,
                          router,
                          userEvents
                        );
                      else if (type == "workshop")
                        displayRazorpay(
                          event,
                          user,
                          "workshop",
                          event.regPrice,
                          router,
                          userWorkshops
                        );
                      else if (type == "lecture")
                        displayRazorpay(
                          event,
                          user,
                          "lecture",
                          event.regPrice,
                          router,
                          userLectures
                        );
                    } else {
                      if (type == "event")
                        registerEvent(event, user, router, userEvents);
                      else if (type == "lecture")
                        registerLecture(event, user, router, userLectures);
                      else if (type == "workshop")
                        registerWorkshop(event, user, router, userWorkshops);
                    }
                  } else {
                    Login(router);
                  }
                }}
              >
                REGISTER for{" "}
                {event.regPrice ? <>{event.regPrice}</> : <>Free</>}
              </div>
            </>
          )}
          {regstatus === "closed" && (
            <>
              <div className={style.button} data-augmented-ui>
                REG Closed
              </div>
            </>
          )}
        </Center>
      </div>
    </>
  );
}
