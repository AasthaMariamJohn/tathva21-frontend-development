import axios from "axios";

export default function getInitialUserDetails(
  setUser,
  setUserEvents,
  setUserLectures,
  setuserWorkshops,
  jwt
) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    })
    .then((res) => {
      
      setUser({
        id:res.data.id,
        name:res.data.name?res.data.name:"",
        phoneNumber:res.data.phoneNumber?res.data.phoneNumber:"",
        tathvaId:res.data.tathvaId,
        email:res.data.email,
        username:res.data.username,
        jwt:jwt 
      })

      var eventIds = [],
        workshopIds = [],
        lectureIds = [];
      for (var i = 0; i < res.data.registeredEvents.length; i++) {
        eventIds.push({
          userEventId:res.data.registeredEvents[i].id,
          eventId:res.data.registeredEvents[i].event.id
        });
      }
      for (var i = 0; i < res.data.registeredWorkshops.length; i++) {
        workshopIds.push({
          userWorkshopId:res.data.registeredWorkshops[i].id,
          workshopId:res.data.registeredWorkshops[i].workshop.id
        });
      }
      for (var i = 0; i < res.data.registeredLectures.length; i++) {
        lectureIds.push({
          userLectureId:res.data.registeredLectures[i].id,
          lectureId:res.data.registeredLectures[i].lecture.id
        }
          );
      }
      setUserLectures(lectureIds);
      setUserEvents(eventIds);
      setuserWorkshops(workshopIds);
    });
}
