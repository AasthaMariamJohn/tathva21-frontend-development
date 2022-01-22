import { createContext, useContext, useState, useEffect } from "react";

const navbarContext = createContext();
navbarContext.displayName = "navbarContext";

export default function NavbarWrapper({children}){
      const [navbar, setNavbar] = useState([
            {
                  id:1,
                  title:"Events",
                  link:"/events"
            },
            {
                  id:2,
                  title:"Workshops",
                  link:"/workshops"
            },
            {
                  id:3,
                  title:"Lectures",
                  link:"/lectures"
            },
            {
                  id:4,
                  title:"Shop",
                  link:"/shop"
            },
            {
                  id:5,
                  title:"Sponsors",
                  link:"/sponsors"
            },
      ]);

      return(
           <navbarContext.Provider
            value={{
                  navbar:navbar,
                  setnavbar:setNavbar,
            }}
           >
                 {children}
           </navbarContext.Provider>

      )
}
export function useNavbarContext(){
      return useContext(navbarContext)
}