import axios from "axios";

export default async function getHomePageInfo(){
      const res=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/test`)

      return res.data.info
}