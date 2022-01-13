import axios from "axios";
export default function getEvents(setEvents) {
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events`).then((res) => {
    var data = [];
    res.data.map((event) => {
      data.push({
        name: event.name,
        id:event.id,
        slug:event.slug,
        coverImage:`${process.env.NEXT_PUBLIC_BACKEND_URL}${event.coverImage.url}`,
      });
    });
    setEvents(data)
  });
}
