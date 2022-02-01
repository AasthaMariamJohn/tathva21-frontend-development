import style from "./event.module.css";
import { Center, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Event_component({ event, type, isRegistered }) {
  const eventdetails = {
    info: event.description,
    contacts: event.contacts,
  };

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info, setInfo] = useState(true);
  const [contact, setContact] = useState(false);
  const [regstatus, setRegstatus] = useState("");
  const [refCode, setRefCode] = useState("");

  const openInfo = () => {
    setInfo(true);
    setContact(false);
  };
  const openContact = () => {
    setInfo(false);
    setContact(true);
  };

  return (
    <>
      <div className={style.main2}>
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
          </div>
          <div className={style.eventdetails}>
            <h3 className={style.titles} style={{ display: "inline-block" }}>
              <button
                onClick={() => {
                  openInfo();
                }}
              >
                Announcements
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
              <Text className={style.des}>
                {event.announcements
                  ? event.announcements.split("\n").map((words) => {
                      return (
                        <Text key={words} className={style.des}>
                          {words}
                        </Text>
                      );
                    })
                  : "No Announcements Check Later for the updates"}
              </Text>
            </div>
          )}
          {contact && (
            <div>
              <table className={style.contact_table}>
                {eventdetails.contacts.map((contact) => {
                  return (
                    <tr key={contact.id}>
                      <td>{contact.name}</td>
                      <td>{contact.phoneNumber}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
