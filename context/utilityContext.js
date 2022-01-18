import { createContext, useContext, useState } from "react";

const utilityContext = createContext();
utilityContext.displayName = "utilityContext";

export function UtilityWrapper({ children }) {
  const [modelIsOpen, setModelIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [building, setBuilding] = useState("");

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
        setBuilding,
        setBuilding,
      }}
    >
      {children}
    </utilityContext.Provider>
  );
}

export function useUtilityContext() {
  return useContext(utilityContext);
}
