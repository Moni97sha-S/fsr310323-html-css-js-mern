import React from "react";
import NavBar from "../components/NavBar";
import CryptoHeroSection from "../components/CryptoHeroSection.js";
import VideoCarousel from "../components/VideoCarousel.js";

function HomePage() {
  const video = [
    { url: "https://www.youtube.com/embed/EKrHGE-ZvPE?si=Egz6Hcbb_M62ldg-" },
    { url: "https://www.youtube.com/embed/Fx5mWceRQpM?si=yZEpd_6y5OixoFCq" },
    { url: "https://www.youtube.com/embed/EO-4mLTccYg?si=zuU_5WLHfcJEsx04" },
    { url: "https://www.youtube.com/embed/vHVNTSmBxwU?si=JMMJyoB3OAjQqW2_" },
    { url: "https://www.youtube.com/embed/xSomPDhOAu4?si=-sHQWt68ZFXqscpj" },
    { url: "https://www.youtube.com/embed/aLh8jlYYvZA?si=ABArnwonnJ6hvWiN" },
  ];
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <NavBar />
      <CryptoHeroSection />
      <VideoCarousel video={video} />
    </>
  );
}

export default HomePage;
