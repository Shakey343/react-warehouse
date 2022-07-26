import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import Button from "./UI/Button";
import "./MapBox.scss";

export const MapBox = () => {
  const [title, setTitle] = useState("Map");

  const handleClick = () => {
    setTitle("MAP!!!");
  };

  return <Button onClick={handleClick}>{title}</Button>;
};
