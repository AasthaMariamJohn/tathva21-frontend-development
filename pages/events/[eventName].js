import Ewl_component from "@/components/common/Ewl_component";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getEventWithName from "@/lib/events/getEvent";
import Loader from "@/components/common/loader";

import style from "../../components/events_workshop_lectures/ewl.module.css";
import { Center } from "@chakra-ui/react";

export function Event({children}) {
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
      <Center>
        <div className={style.listmobile}>
          <ul>
            <li>AI</li>
            <li>ML</li>
            <li>ROCKET</li>
            <li>SPACEx</li>
            <li>Tesla</li>
            <li>Googe</li>
          </ul>
        </div>
      </Center>
      <div className={style.main2}>
        {/* <Ewl_component /> */}
        {children}
      </div>
    </div>
  );
}


export default function EventName() {

  const [Event1, setEvent1] = useState(null);
  const router=useRouter()
  const { eventName } = router.query;
  useEffect(() => {
    if (eventName) {
      getEventWithName(eventName, setEvent1);
    }
  }, [eventName]);

  return (
    <div>
      <Event>
        {Event1?<Ewl_component event={Event1}/>:<Loader/>}
        
      </Event>
    </div>
  );
}



// import Loader from "@/components/common/loader";
// import RazerPay from "@/components/common/razerpay";
// import FileUpload from "@/components/events_workshop_lectures/events/fileSubmit";
// import SearchTeamMemberBox from "@/components/events_workshop_lectures/events/searchTeamMemBox";
// import { useUserContext } from "@/context/userContext";
// import getEventWithName from "@/lib/events/getEvent";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

// import registerEvent from "@/lib/events/registerEvent";
// import { ToastContainer } from "react-toastify";
// import getRegisteredEventInfo from "@/lib/events/getRegisterEventInfo";
// import { TeamMemberWrapper } from "@/context/teamMemberContext";

// export default function Event() {
//   const { user, userEvents } = useUserContext();
//   const router = useRouter();
//   const { eventName } = router.query;
//   const [Event, setEvent] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [userEventId, setUserEventId] = useState(null);
//   const [userEventDetails, setUserEventDetails] = useState(null);

  // useEffect(() => {
  //   if (eventName) {
  //     getEventWithName(eventName, setEvent);
  //   }
  // }, [eventName]);
//   useEffect(() => {
//     if (Event && userEvents) {
//       for (var i = 0; i < userEvents.length; i++) {
//         if (userEvents[i].eventId == Event.id) {
//           setUserEventId(userEvents[i].userEventId);
//           setIsRegistered(true);
//         }
//       }
//     }
//   }, [Event, userEvents]);
//   useEffect(() => {
//     if (isRegistered && Event && userEventId) {
//       getRegisteredEventInfo(
//         userEventId,
//         user.jwt,
//         setEvent,
//         setUserEventDetails
//       );
//       setEvent(null);
//     }
//   }, [isRegistered]);
//   return (
//     <div>
//       <ToastContainer limit={1} />
//       {Event ? (
//         <div>
//           {Event.id}
//           <br />
//           <Image
//             src={Event.coverImage.src}
//             width={200}
//             height={200}
//             alt="event-cover-image"
//           ></Image>
//           <br />

//           {isRegistered ? (
//             <>
//               you are registered for this event
//               <FileUpload jwt={user.jwt} refId={userEventId} />
//               {Event.isTeamEvent && userEventDetails ? (
//                 <TeamMemberWrapper>
//                   <SearchTeamMemberBox
//                     eventId={userEventId}
//                     maxTeamSize={Event.maxTeamSize}
//                     teamMembers={userEventDetails.teamMembers}
//                   />
//                 </TeamMemberWrapper>
//               ) : (
//                 <div>Not a team event</div>
//               )}
//             </>
//           ) : (
//             <>
//               {Event.regPrice ? (
//                 <div>
//                   <RazerPay
//                     event={Event}
//                     user={user}
//                     paymentType={"event"}
//                     regPrice={Event.regPrice}
//                   />
//                 </div>
//               ) : (
//                 <div>
//                   <button
//                     onClick={() => {
//                       registerEvent(Event.id, user.id, user.jwt, router);
//                     }}
//                   >
//                     Register
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// }
