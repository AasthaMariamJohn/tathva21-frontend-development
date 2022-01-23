import axios from "axios";
export default function getWorkshops(setWorkshops,router) {
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
    router.push(`/workshops/${data[0].slug}`)
  });
}
