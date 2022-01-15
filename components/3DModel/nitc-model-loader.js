import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";
import style from "./3dmodel.module.css";

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className={style["NITC_Model"]}
    m={["0px"]}
    w={["100vw"]}
    h={["100vh"]}
  >
    {children}
  </Box>
));
ModelContainer.displayName = "ModelContainer";

const Loader = () => {
  return <ModelContainer />;
};

export default Loader;
