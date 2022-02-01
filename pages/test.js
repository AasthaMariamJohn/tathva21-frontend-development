import { Center } from "@chakra-ui/react";
import React from "react";
import styles from "@/components/common/styles.module.css";
export default function Test() {
  return (
    <div className={styles.video}>
      <video
        autoPlay
        loop
        muted
        preload={"auto"}
        src="/videos/loader.m4v"
        type="video/m4v"
        onLoad={() => {
          console.log("video loaded");
        }}
      ></video>
    </div>
  );
}
