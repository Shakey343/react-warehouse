import React, { useState } from "react";
import "./MapBox.scss";

export const MapBox = () => {
  const [title, setTitle] = useState('Map');

  const handleClick = () => {
    setTitle('MAP!!!');
  }

  return <button onClick={handleClick} >{title}</button>;
};
