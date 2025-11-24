import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/temp.png";
import "./navbar.css";

export default function Navbarcomponents() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  // const formattedTime = time.toLocaleTimeString();
  // const formattedDate = time.toLocaleDateString();

  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // เดือนเริ่มจาก 0
    const day = date.getDate().toString().padStart(2, "0");

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom px-3">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                marginLeft: "8px",
                backgroundColor: "white",
              }}
            />
          </Link>
          <h3 style={{ color: "honeydew" }}>Dashboard Monitoring</h3>
        </div>
        <div className="ms-auto d-flex align-items-center gap-2">
          <h3 style={{ color: "honeydew" }}>{formatTime(time)}</h3>
        </div>
      </nav>
    </>
  );
}
