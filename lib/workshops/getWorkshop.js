import axios from "axios";
export default function getWorkshopWithName(name, setWorkshop) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workshops/${name}`)
    .then((res) => {
      setWorkshop({
        id: res.data.id,
        slug: res.data.slug,
        name: res.data.name,
        description: res.data.description,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${res.data.coverImage.url}`,
        },
        regPrice: res.data.regPrice,
        regStartDate: res.data.regStartDate,
        regEndDate: res.data.regEndDate,
        contacts: res.data.contacts,
      });
    });
}
// regStartDate: moment(res.data.regStartDate).format(
//   "DD-MM-yyyy h:mm:ss a"
// ),
// regEndDate: moment(res.data.regEndDate).format("DD-MM-yyyy h:mm:ss a"),
