// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.scss";
import { NavbarW } from "./components/navbar";
import { HomePage } from "./components/Home/HomePage";
import GalleryPage from "./components/Gallery/GalleryPage";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleShowGallery = () => {
    setShowHome(false);
    setShowGallery(true);
  };

  const handleShowHome = () => {
    setShowGallery(false);
    setShowHome(true);
  };

  return (
    <>
      <NavbarW
        onGalleryClick={handleShowGallery}
        onHomeClick={handleShowHome}
      />
      {showHome && <HomePage />}
      {showGallery && <GalleryPage />}
    </>
  );
}

export default App;
