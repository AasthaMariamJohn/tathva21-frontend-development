import { createContext, useContext, useState, useEffect } from "react";

const workshopContext = createContext();
workshopContext.displayName = "workshopContext";

export default function WorkshopWrapper({children}){
      const [workshops, setWorkshops] = useState(null);

      return(
           <workshopContext.Provider
            value={{
                  workshops:workshops,
                  setWorkshops:setWorkshops,
            }}
           >
                 {children}
           </workshopContext.Provider>

      )
}
export function useWorkshopContext(){
      return useContext(workshopContext)
}