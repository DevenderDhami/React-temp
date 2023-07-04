import { Col, Row } from "antd";
import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="homepage-wrapper">
        <Navbar />{" "}
        <Row>
          <Col xs={24} md={24}>
            {" "}
          </Col>
          <Col xs={12} md={21}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            accusamus.
          </Col>
          <Col xs={12} md={21}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            accusamus.
          </Col>
          <Col xs={12} md={21}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            accusamus.
          </Col>
        </Row>
        <div className="text-2xl bg-slate-500">
          Homepage
        </div>
      </div>
    </>
  );
};

export default Home;
