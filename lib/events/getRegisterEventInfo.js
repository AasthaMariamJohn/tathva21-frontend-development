import axios from "axios";
export default function getRegisteredEventInfo(eventId, jwt, setEvent,setUserEventDetails) {
  axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-event-details/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then((res) => {
      var event = res.data.event;
      setEvent({
        id: event.id,
        name: event.name,
        slug:event.slug,
        description: event.description,
        rules: event.rules,
        isTeamEvent: event.isTeamEvent,
        maxTeamSize: event.maxTeamSize,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${event.coverImage.url}`,
        },
        regPrice: event.regPrice,
        regStartDate: event.regStartDate,
        regEndDate: event.regEndDate,
        submissionStartDate: event.submissionStartDate,
        submissionEndDate: event.submissionEndDate,
        submissionInfo: event.submissionInfo,
      });
      setUserEventDetails({
            teamMembers:res.data.teamMembers,
            userResponses:res.data.userResponses,
            status:res.data.status,
            submission:res.data.submissions,
      })
    });
}
