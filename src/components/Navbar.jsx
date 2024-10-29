import { useState } from "react";

const Navbar = () => {
  const [showCurrent, setCurrent] = useState("home");

  //   function handleCurrentPage() {}
  return (
    <div className="nav-container">
      <div className="text-xl">Cod❌ Jobs</div>
      <div className="nav-items">
        <input className="nav-search" type="text" placeholder="Search..." />
        <button
          className={showCurrent === "home" ? "nav-active" : ""}
          onClick={() => setCurrent("home")}
        >
          Home
        </button>
        <button
          className={showCurrent === "jobs" ? "nav-active" : ""}
          onClick={() => setCurrent("jobs")}
        >
          Jobs
        </button>
        <button
          className={showCurrent === "about" ? "nav-active" : ""}
          onClick={() => setCurrent("about")}
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
