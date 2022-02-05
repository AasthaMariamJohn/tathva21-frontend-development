import style from "./db.module.css";
import { MdAlarm } from "react-icons/md";
import { Center, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function EventComponent({ event }) {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className={style["event-main"]}>
      <Image
        src={event.coverImage.src}
        alt="next-image"
        width={300}
        justifySelf={"center"}
        alignSelf={"center"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2 className={style.titles}>{event.name}</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.8rem",
            alignSelf: "center",
          }}
        >
          <h3
            style={{
              color: selectedMenu === 0 ? "#fff" : "grey",
            }}
          >
            <button
              onClick={() => {
                setSelectedMenu(0);
              }}
            >
              ANNOUNCEMENTS
            </button>
          </h3>
          <h3
            style={{
              color: selectedMenu === 1 ? "#fff" : "grey",
            }}
          >
            <button
              onClick={() => {
                setSelectedMenu(1);
              }}
            >
              Contact
            </button>
          </h3>
        </div>
        {selectedMenu === 0 ? (
          <Announcements data={event.announcements} />
        ) : (
          <Contacts data={event.contacts} />
        )}
      </div>
    </div>
  );
}

const Announcements = ({ data }) => {
  return (
    <div
      style={{
        fontFamily: "quantico",
        color: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <p
        style={{
          whiteSpace: "pre-wrap",
          textAlign: "left",
        }}
      >
        {data ? data : "No announcements"}
      </p>
    </div>
  );
};
const Contacts = ({ data }) => {
  return (
    <div
      style={{
        fontFamily: "quantico",
        color: "rgba(255, 255, 255, 0.7)",
      }}
    >
      {data?.map((item, idx) => {
        return <div>{item.name + " " + item.phone}</div>;
      })}
    </div>
  );
};
