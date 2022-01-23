import getInitialUserDetails from "@/lib/user/getInitialUserDetails";
import { parseCookies } from "nookies";
import { createContext, useContext, useState, useEffect } from "react";

 

const UserContext = createContext();
UserContext.displayName = "UserContext";

export function UserWrapper({ children }) {
  const { TathvaUser } = parseCookies();

  var initialVal = TathvaUser ? JSON.parse(TathvaUser) : null;
  const [user, setUser] = useState(initialVal);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [userLectures, setUserLectures] = useState([]);
  const [userWorkshops, setUserWorkshops] = useState([]);

  useEffect(()=>{
    let userDetails=localStorage.getItem("TathvaUser")
    if(userDetails){
      // setUser(JSON.parse(userDetails))
     getInitialUserDetails(
        setUser,
        setUserEvents,
        setUserLectures,
        setUserWorkshops,
        JSON.parse(userDetails).jwt
      )
      if(userDetails)
        setIsLoggedIn(true);
      else
       setIsLoggedIn(false);
    }
    

  },[])

  // useEffect(() => {
  //   if (user) {
  //     getInitialUserDetails(
  //       setUser,
  //       setUserEvents,
  //       setUserLectures,
  //       setUserWorkshops,
  //       user.jwt
  //     );
  //     // setIsLoggedIn(true);

  //   }
  // }, [user]);
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        userEvents: userEvents,
        setUserEvents: setUserEvents,
        userWorkshops: userWorkshops,
        setUserWorkshops: setUserWorkshops,
        userLectures: userLectures,
        setUserLectures: setUserLectures,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
