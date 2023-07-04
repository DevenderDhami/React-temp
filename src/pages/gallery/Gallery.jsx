import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar /> Gallery
      </div>
    </div>
  );
};

export default Gallery;
