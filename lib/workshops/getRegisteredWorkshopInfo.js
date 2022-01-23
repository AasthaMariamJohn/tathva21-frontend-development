import axios from "axios";

export default function getRegisteredWorkshopInfo(
  eventId,
  jwt,
  setWorkshop,
  setUserWorkshopDetails
) {
  axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-workshop-details/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then((res) => {
      var workshop = res.data.workshop;
      setWorkshop({
        id: workshop.id,
        name: workshop.name,
        slug: workshop.slug,
        description: workshop.description,
        rules: workshop.rules,
        announcements: workshop.announcements,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${workshop.coverImage.url}`,
        },
        regPrice: workshop.regPrice,
        regStartDate: workshop.regStartDate,
        regEndDate: workshop.regEndDate,
        contacts: workshop.contacts,
      });
      setUserWorkshopDetails({
        metaValues: res.data.metaValues,
      });
    });
}
