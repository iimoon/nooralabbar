import React from "react";
import logo from "../assets/logos/alabbarfm.png"

const MaintenancePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* Logo Section */}
      <img
        src={logo}
        alt="Company Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      {/* Title Section */}
      <h1 style={{ fontSize: "2rem", color: "#343a40" }}>We'll Be Back Soon!</h1>

      {/* Description Section */}
      <p style={{ fontSize: "1rem", color: "#6c757d", maxWidth: "600px" }}>
        Our website is currently undergoing scheduled maintenance. We apologize for the inconvenience and appreciate your patience. Please check back again soon!
      </p>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "20px",
          color: "#6c757d",
          fontSize: "0.9rem",
        }}
      >
        &copy; {new Date().getFullYear()} Al Abbar FM . All rights reserved.
      </div>
    </div>
  );
};

export default MaintenancePage;
