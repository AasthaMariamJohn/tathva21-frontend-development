import axios from "axios";

export default async function getHomePageInfo() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/frontpage`
  );
  return res.data.news;
}
