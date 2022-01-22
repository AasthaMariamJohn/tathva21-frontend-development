import axios from "axios";
export default function getWorkshops(setWorkshops) {
  console.log('aaaa')
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workshops`).then((res) => {
    var data = [];
    res.data.map((event) => {
      data.push({
        name: event.name,
        id: event.id,
        slug: event.slug,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${event.coverImage.url}`,
        },
      });
    });
    setWorkshops(data);
  });
}
