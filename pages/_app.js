import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/common/layout";
import { UserWrapper } from "@/context/userContext";
import "@/styles/globals.css";
import { UtilityWrapper } from "@/context/utilityContext";
function MyApp({ Component, pageProps }) {
  return (
    <UtilityWrapper>
      <ChakraProvider>
        <UserWrapper>
          <Layout>
        
            <Component {...pageProps} />
          </Layout>
        </UserWrapper>
      </ChakraProvider>
    </UtilityWrapper>
  );
}

export default MyApp;
