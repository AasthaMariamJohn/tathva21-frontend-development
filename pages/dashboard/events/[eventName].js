import Dashboard from "@/components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function index() {
  return (
    <div>
      <ToastContainer />
      <Dashboard />
    </div>
  );
}
