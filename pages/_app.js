import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/common/layout";
import { UserWrapper } from "@/context/userContext";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider>
      <UserWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserWrapper>
    </ChakraProvider>
  );
}




export default MyApp;
