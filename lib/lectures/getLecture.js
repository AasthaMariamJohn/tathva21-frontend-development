import axios from "axios";

export default function getLectureWithName(name, setLecture) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lectures/${name}`)
    .then((res) => {
      setLecture({
        id: res.data.id,
        slug:res.data.slug,
        name: res.data.name,
        description: res.data.description,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${res.data.coverImage.url}`,
        },
        regPrice: res.data.regPrice,
        regStartDate: res.data.regStartDate,
        regEndDate: res.data.regEndDate,
      });
    });
}
