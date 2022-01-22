import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/common/layout";
import { UserWrapper } from "@/context/userContext";
import "@/styles/globals.css";
import { UtilityWrapper } from "@/context/utilityContext";
import WorkshopWrapper from "@/context/workshopContext";
import NavbarWrapper from "@/context/navbarContext";
function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);
  return (
    <UtilityWrapper>
      <ChakraProvider>
        <UserWrapper>
          <NavbarWrapper>
            <WorkshopWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </WorkshopWrapper>
          </NavbarWrapper>
        </UserWrapper>
      </ChakraProvider>
    </UtilityWrapper>
  );
}

export default MyApp;
