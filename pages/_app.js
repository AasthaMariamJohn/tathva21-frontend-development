import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/common/layout";
import { UserWrapper, useUserContext } from "@/context/userContext";
import "@/styles/globals.css";

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
