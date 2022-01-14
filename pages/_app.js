import { ChakraProvider } from '@chakra-ui/react'
import Layout from "@/components/common/layout";
import { UserWrapper } from "@/context/userContext";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </UserWrapper>
  );
}

export default MyApp;