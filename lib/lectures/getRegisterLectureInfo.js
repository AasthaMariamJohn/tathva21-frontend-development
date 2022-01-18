import axios from "axios";

export default function getRegisteredLectureInfo(eventId,jwt,setLecture,setUserLectureDetails) {
  axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-lecture-details/${eventId}`,
    {
          headers:{
                Authorization:`Bearer ${jwt}`
          }
    })
    .then((res) =>{
      var lecture = res.data.lecture;
      setLecture({
        id: lecture.id,
        name: lecture.name,
        slug:lecture.slug,
        description: lecture.description,
        rules: lecture.rules,
        announcements:lecture.announcements,
        coverImage: {
          src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${lecture.coverImage.url}`,
        },
        regPrice: lecture.regPrice,
        regStartDate: lecture.regStartDate,
        regEndDate: lecture.regEndDate,
      });
      setUserLectureDetails({
            metaValues:res.data.metaValues
      })
    });
}
