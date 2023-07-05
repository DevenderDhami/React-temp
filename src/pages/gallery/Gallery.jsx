import React from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "antd";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Row>
        <Col xs={8} md={4}>
          <div className="flex flex-col  gap-3 h-screen bg-green-200 p-4">
            <Link
              className="border rounded-2xl p-2 bg-blue-200 hover:bg-blue-400"
              to="featured"
            >
              Featured pics
            </Link>
            <Link
              className="border rounded-2xl p-2 bg-blue-200 hover:bg-blue-400"
              to="latest"
            >
              Latest pics
            </Link>
          </div>
        </Col>
        <Col xs={16} md={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
