import { parseCookies } from "nookies";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();
UserContext.displayName="UserContext"

export function UserWrapper({children}){

      const {TathvaUser}=parseCookies()

      var initialVal=TathvaUser?JSON.parse(TathvaUser):null;
      const [user, setUser] = useState(initialVal)
      const [isLoggedIn, setIsLoggedIn] = useState(false)

      return(
            <UserContext.Provider value={{user:user,setUser:setUser,isLoggedIn:isLoggedIn,setIsLoggedIn:setIsLoggedIn}}>
                  {children}
            </UserContext.Provider>
      )
}

export function useUserContext(){
      return useContext(UserContext)
}