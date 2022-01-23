import axios from "axios";

export default function getRegisteredWorkshops(jwt, setRegWorkshops) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      let workshops = res.data.registeredWorkshops;
      // console.log(res.data.registeredWorkshops.workshops)
      let data=[];
      if (workshops) {
        for (let i = 0; i < workshops.length; i++) {
              console.log(workshops[i])
          data.push({
            id: workshops[i].workshop.id,
            name: workshops[i].workshop.name,
            slug: workshops[i].workshop.slug,
            src:`${process.env.NEXT_PUBLIC_BACKEND_URL}${ workshops[i].workshop.coverImage.url}`,
          });
        }
      }
      setRegWorkshops(data)
    });
}
