import axios from "axios";
export default async function getLectures() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/lectures`
  );
  var data = [];
  res.data.map((event) => {
    data.push({
      name: event.name,
      id: event.id,
      slug: event.slug,
      price: event.regPrice,
      description: event.description,
      coverImage: {
        src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${event.coverImage.url}`,
      },
    });
  });
  return data;
}
