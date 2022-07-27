// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.scss";
import { NavbarW } from "./components/navbar";
import { HomePage } from "./components/Home/HomePage";
import GalleryPage from "./components/Gallery/GalleryPage";
import LfoPage from "./components/LFO/LfoPage";
import RpPage from "./components/RpPage/RpPage";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [showLfo, setShowLfo] = useState(false);
  const [showRp, setShowRp] = useState(false);

  const handleShowGallery = () => {
    setShowHome(false);
    setShowLfo(false);
    setShowRp(false);
    setShowGallery(true);
  };

  const handleShowHome = () => {
    setShowGallery(false);
    setShowLfo(false);
    setShowRp(false);
    setShowHome(true);
  };

  const handleShowLfo = () => {
    setShowGallery(false);
    setShowHome(false);
    setShowRp(false);
    setShowLfo(true);
  }

  const handleShowRp = () => {
    setShowGallery(false);
    setShowHome(false);
    setShowLfo(false);
    setShowRp(true);
  }

  return (
    <>
      <NavbarW
        onGalleryClick={handleShowGallery}
        onHomeClick={handleShowHome}
        onLfoClick={handleShowLfo}
        onRpClick={handleShowRp}
      />
      {showHome && <HomePage />}
      {showGallery && <GalleryPage />}
      {showLfo && <LfoPage />}
      {showRp && <RpPage />}
    </>
  );
}

export default App;
