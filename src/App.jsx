import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div
        style={{
          marginTop: "50px", // เลื่อนลงจาก Navbar
          marginLeft: "200px", // เลื่อนออกจาก Sidebar
          padding: "20px",
          height: "calc(100vh - 50px)",
          overflowY: "auto",
          // marginBottom: "50px",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
