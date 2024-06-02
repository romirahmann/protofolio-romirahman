import { Outlet } from "react-router-dom";
import NavBar from "../component/navbar";
import "../assets/style/navbar.css";
export default function LandingPage() {
  return (
    <>
      <div className="bg-[#10101E]">
        <div className="navbar sticky top-0 z-50">
          <NavBar></NavBar>
        </div>

        <Outlet />
      </div>
    </>
  );
}
