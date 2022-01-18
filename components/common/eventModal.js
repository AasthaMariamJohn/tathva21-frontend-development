import { useUtilityContext } from "@/context/utilityContext";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import style from "./eventModal.module.css";

function mouseRevertX(mouseX){
  return (mouseX+1)*window.innerWidth/2
}
function mouseRevertY(mouseY){
  return -(mouseY-1)*window.innerHeight/2
}

export default function BasicUsage() {
  // const [xcor, setXcor] = useState(null);
  // const [ycor, setYcor] = useState(null);
  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         // toggle();
  //       }
  //     }

  //     function printMousePos(event) {
  //       setXcor(event.clientX);
  //       setYcor(event.clientY);
  //     }

  //     window.addEventListener("click", printMousePos);

  //     window.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       window.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  // const { modelIsOpen, setModelIsOpen } = useUtilityContext();

  // useEffect(()=>{
  //   if(!modelIsOpen){
  //     console.log("avunind")
  //     printMousePos()
  //   }
  //   console.log("purathu")

  // },[ modelIsOpen])

  function toggle() {
    if (modelIsOpen) {
      setModelIsOpen(false);
    } else {
      setModelIsOpen(true);
    }
  }

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  const [xcor, setXcor] = useState(null);
  const [ycor, setYcor] = useState(null);
 
  const { modelIsOpen, setModelIsOpen, mouse } = useUtilityContext();
  function printMousePos(event) {
    setXcor(event.clientX);
    setYcor(event.clientY);
  }
  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         // toggle();
  //       }
  //     }

      
  //  window.addEventListener("click", (e)=>{printMousePos(e)});

  //     window.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       window.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  
  useEffect(()=>{
    
    if(modelIsOpen)
    {
      console.log(mouseRevertX(mouse.x),mouseRevertY(mouse.y), modelIsOpen)
    }
  },[ modelIsOpen])
  // function toggle() {
  //   if (modelIsOpen) {
  //     setModelIsOpen(false);
  //   } else {
  //     setModelIsOpen(true);
  //   }
  // }

  const wrapperRef = useRef(null);  
  
  
  return (
    <>
      {modelIsOpen && (
        <div
          className={style.modalmain}
          ref={wrapperRef}
          style={{ top: `${mouseRevertY(mouse.y)}px`, left: `${mouseRevertX(mouse.x)}px` }}
        >
          <div className={style.modalclose}>
            <button onClick={toggle}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={style.modalname}>Event</div>
          <div className={style.modalbuildname}>Aryabatta hall</div>
          <div className={style.modalview}>
            <button>View</button>
          </div>
        </div>
      )}
    </>
  );
}
