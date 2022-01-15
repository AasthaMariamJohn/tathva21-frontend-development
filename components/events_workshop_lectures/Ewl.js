import style from "./ewl.module.css";

import Ewl_component from "../common/Ewl_component";
import { Center } from "@chakra-ui/react";
export default function Event({children}) {
  return (
    <div className={style.main}>
      <div className={style.list}>
        <ul>
          <li>AI</li>
          <li>ML</li>
          <li>ROCKET</li>
          <li>SPACEx</li>
          <li>Tesla</li>
          <li>Googe</li>
        </ul>
      </div>
      <Center>
        <div className={style.listmobile}>
          <ul>
            <li>AI</li>
            <li>ML</li>
            <li>ROCKET</li>
            <li>SPACEx</li>
            <li>Tesla</li>
            <li>Googe</li>
          </ul>
        </div>
      </Center>
      {/* <Ewl_component /> */}
      {children}
    </div>
  );
}
