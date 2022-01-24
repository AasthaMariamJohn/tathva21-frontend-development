export function setRefCode(refCode){
      localStorage.setItem("refCode",refCode)
}
export function getRefCode(){
      return localStorage.getItem("refCode")
}