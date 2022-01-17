import {  toast } from "react-toastify";
export default  function updateSuccessMessage() {
  console.log(" Profile Update Successfully");
  toast.success(" Profile Update Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
