import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="NITC-Model"
    m={["0px"]}
    w={["100vw"]}
    h={["100vh"]}
    position="relative"
  >
    {children}
  </Box>
));
ModelContainer.displayName = 'ModelContainer';

const Loader = () => {
  return <ModelContainer />;
};

export default Loader;
