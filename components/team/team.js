import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./team.module.css";
import PRC from "./Prc";
import Tech from "./Tech";
import Design from "./Design";
import Market from "./Market";
import Media from "./Media";
import Tcct from "./Tcct";
import Programm from "./Programme_Committee";
import Workshop from "./Workshop";
import Executive from "./Executive";
import Lecture from "./Lecture";
import Pc from "./Programme_Committee";

export default function Home() {
  const [prc, setPrc] = useState(false);
  const [tech, setTech] = useState(false);
  const [design, setDesign] = useState(false);
  const [market, setMarket] = useState(false);
  const [workshop, setWorkshop] = useState(false);
  const [executive, setExecutive] = useState(true);
  const [tcct, seTtcct] = useState(false);
  const [media, setMedia] = useState(false);
  const [lecture, setLecture] = useState(false);
  const [pc, setPc] = useState(false);

  const openprc = () => {
    setPrc(true);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const opentech = () => {
    setPrc(false);
    setTech(true);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const opendesign = () => {
    setPrc(false);
    setTech(false);
    setDesign(true);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const openmarket = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(true);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const openworkshop = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(true);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const openexecutive = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(true);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };

  const opentcct = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(true);
    setMedia(false);
    setLecture(false);
    setPc(false);
  };
  const openmedia = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(true);
    setLecture(false);
    setPc(false);
  };
  const openlecture = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(true);
    setPc(false);
  };
  const openpc = () => {
    setPrc(false);
    setTech(false);
    setDesign(false);
    setMarket(false);
    setWorkshop(false);
    setExecutive(false);
    seTtcct(false);
    setMedia(false);
    setLecture(false);
    setPc(true);
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.teamdesktop}> */}
      <div className={styles.teamheading}>
        <li
          onClick={openexecutive}
          className={executive ? styles.teamhiglight : ""}
        >
          Executive
        </li>
        <li onClick={openpc} className={pc ? styles.teamhiglight : ""}>
          Event
        </li>
        <li onClick={openprc} className={prc ? styles.teamhiglight : ""}>
          Publicity
        </li>
        <li onClick={opentech} className={tech ? styles.teamhiglight : ""}>
          Tech
        </li>
        <li onClick={opendesign} className={design ? styles.teamhiglight : ""}>
          Design
        </li>

        <li
          onClick={openlecture}
          className={lecture ? styles.teamhiglight : ""}
        >
          Lecture
        </li>
        <li
          onClick={openworkshop}
          className={workshop ? styles.teamhiglight : ""}
        >
          Workshop
        </li>
        <li onClick={openmarket} className={market ? styles.teamhiglight : ""}>
          Marketing
        </li>
        <li onClick={opentcct} className={tcct ? styles.teamhiglight : ""}>
          TCCT
        </li>
        <li onClick={openmedia} className={media ? styles.teamhiglight : ""}>
          Media
        </li>
      </div>
      {prc && <PRC />}
      {tech && <Tech />}
      {design && <Design />}
      {market && <Market />}
      {executive && <Executive />}
      {media && <Media />}
      {tcct && <Tcct />}
      {workshop && <Workshop />}
      {lecture && <Lecture />}
      {pc && <Pc />}
    </div>
  );
}
