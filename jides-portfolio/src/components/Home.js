import React from "react";
import backgroundImg from "../assets/images/IMG_0655.jpg";

function Home() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '160vh' }}>
      
    </div>
  );
}

export default Home;
