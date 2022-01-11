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
  const [userEvents, setUserEvents] = useState(null);
  const [userLectures, setUserLectures] = useState(null);
  const [userWorkshops, setuserWorkshops] = useState(null);
  useEffect(() => {
    if (user)
      getInitialUserDetails(
        setUserEvents,
        setUserLectures,
        setuserWorkshops,
        user.jwt
      );
      setIsLoggedIn(true)
  }, [user]);
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
        setuserWorkshops: setuserWorkshops,
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
