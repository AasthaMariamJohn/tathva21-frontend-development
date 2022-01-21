import { createContext, useContext, useState } from "react";

const utilityContext = createContext();
utilityContext.displayName = "utilityContext";

export function UtilityWrapper({ children }) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [building, setBuilding] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHandBOpen,setIsHandBOpen]=useState(false)
  return (
    <utilityContext.Provider
      value={{
        modelIsOpen: modelIsOpen,
        setModelIsOpen: setModelIsOpen,
        title: title,
        setTitle,
        setTitle,
        link: link,
        setLink: setLink,
        setBuilding: setBuilding,
        building: building,
        mouse: mouse,
        setMouse: setMouse,
        isHandBOpen:isHandBOpen,
        setIsHandBOpen:setIsHandBOpen,
      }}
    >
      {children}
    </utilityContext.Provider>
  );
}

export function useUtilityContext() {
  return useContext(utilityContext);
}
