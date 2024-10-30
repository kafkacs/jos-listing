import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showCurrent, setCurrent] = useState("home");

  //   function handleCurrentPage() {}
  return (
    <div className="nav-container">
      <div className="text-xl">Cod❌ Jobs</div>
      <div className="nav-items">
        <input className="nav-search" type="text" placeholder="Search..." />
        <Link
          className={showCurrent === "home" ? "nav-active" : ""}
          onClick={() => setCurrent("home")}
          to="/"
        >
          Home
        </Link>
        <Link
          className={showCurrent === "jobs" ? "nav-active" : ""}
          onClick={() => setCurrent("jobs")}
          to="/jobs"
        >
          Jobs
        </Link>
        <Link
          className={showCurrent === "about" ? "nav-active" : ""}
          onClick={() => setCurrent("about")}
          to="/about"
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
