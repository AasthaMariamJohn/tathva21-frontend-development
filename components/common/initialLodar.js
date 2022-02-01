import styles from "./styles.module.css";
import {useState,useEffect} from "react";
export default function InitialLoader({loading}) {
  // const begin=new Date().getTime();
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   if(!loading){
  //     if(new Date().getTime()-begin <2){
  //       console.log(new Date().getTime()-begin);
  //       setTimeout(()=>{
  //         setShow(false);
  //       }
  //       ,4000);
  //     }
  //     else{
  //       setShow(false);
  //     }
  //   };
  // }, [loading]);
  window.setTimeout(() => {
    setShow(false);
  }, 10000);


  
  return (
    <div className={styles.video}>
   {show && loading &&  <video
      autoPlay
      loop
      muted
      preload={"auto"}
      src="/videos/loader.m4v"
      type="video/m4v"
    ></video>}
  </div>
  );
}
