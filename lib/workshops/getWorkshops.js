import axios from "axios";
export default async function getWorkshops() {
  let res=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workshops`)
  
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
    return data
}
