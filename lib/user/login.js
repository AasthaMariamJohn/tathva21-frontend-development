import { setCookie } from "nookies";

export function Login(router) {
      sessionStorage.setItem("logginFrom",router.pathname)
      router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/connect/google`)
}

export function saveCookie(user){
      // setCookie(null,'TathvaUser',(JSON.stringify(user)),{
      //       maxAge:30*24*60*60,
      //       path:'/',
      // })   
      localStorage.setItem('TathvaUser',JSON.stringify(user))   
}
export function CleanedUserData(jwt,user){
      return {
            jwt:jwt,
            id:user.id,
            username:user.username,
            email:user.email,
            tathvaId:user.tathvaId
      }
}