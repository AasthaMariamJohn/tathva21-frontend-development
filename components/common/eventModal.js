import { useUtilityContext } from "@/context/utilityContext";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import style from "./eventModal.module.css";

export default function BasicUsage() {
  const [xcor, setXcor] = useState(null);
  const [ycor, setYcor] = useState(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // toggle();
        }
      }

      function printMousePos(event) {
        setXcor(event.clientX);
        setYcor(event.clientY);
      }

      window.addEventListener("click", printMousePos);

      window.addEventListener("mousedown", handleClickOutside);
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const { modelIsOpen, setModelIsOpen } = useUtilityContext();

  function toggle() {
    if (modelIsOpen) {
      setModelIsOpen(false);
    } else {
      setModelIsOpen(true);
    }
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <>
      {modelIsOpen && (
        <div
          className={style.modalmain}
          ref={wrapperRef}
          style={{ top: `${ycor}px`, left: `${xcor}px` }}
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
