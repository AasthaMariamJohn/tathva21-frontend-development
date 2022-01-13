import Layout from "@/components/common/layout";
import { UserWrapper } from "@/context/userContext";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </UserWrapper>
  );
}

export default MyApp;
