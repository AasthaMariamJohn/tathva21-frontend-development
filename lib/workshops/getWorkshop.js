import axios from "axios";

export default function getWorkshopWithName(name, setWorkshop) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workshops/${name}`)
    .then((res) => {
      setWorkshop({
        id: res.data.id,
        name: res.data.name,
        description: res.data.description,
        coverImage: `${process.env.NEXT_PUBLIC_BACKEND_URL}${res.data.coverImage.url}`,
        regPrice: res.data.regPrice,
        regStartDate: res.data.regStartDate,
        regEndDate: res.data.regEndDate,
      });
    });
}
