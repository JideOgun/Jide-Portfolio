import React, { useState } from "react";
import backgroundImg from "../assets/images/IMG_0655.jpg";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "160vh",
      }}
    >
      <div>
      <button className="download"><a className="download" href="../assets/resume/Jide_FS_ Resume_1.0.docx.pdf" download>Download Resume</a></button>  
      </div>
    </div>
  );
}

export default Home;
