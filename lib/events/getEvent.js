import axios from "axios";
import moment from "moment";
export default function getEventWithName(name, setEvent) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events/${name}`)
    .then((res) => {
      setEvent({
        id: res.data.id,
        name: res.data.name,
        slug: res.data.slug,
        description: res.data.description,
        rules: res.data.rules,
        isTeamEvent: res.data.isTeamEvent,
        maxTeamSize: res.data.maxTeamSize,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${res.data.coverImage.url}`,
        },
        regPrice: res.data.regPrice,
        regStartDate: res.data.regStartDate,
        regEndDate: res.data.regEndDate,
        contacts: res.data.contacts,
        submissionInfo: res.data.submissionInfo,
        submissionStartDate: res.data.submissionStartDate,
        submissionEndDate: res.data.submissionEndDate,
      });
    });
}
