import { Col, Row } from "antd";
import React from "react";
import { ABOUT, CONTACT_US, EVENTS, HOME } from "../constants/constants";
import "./index.css";
import { NavLink } from "react-router-dom";
import { GALLERY } from "../constants/constants";
// import { PROFILE } from "../assets/profile.png";
const Navbar = () => {
  return (
    <div className="navbar wrapper bg-green-700  text-white cursor-pointer py-4">
      <Row>
        <Col xs={24} md={4} className="my-auto">
          <NavLink className="text-xl link  " to={HOME}>
            Home
          </NavLink>
        </Col>
        <Col xs={24} md={4} className="my-auto">
          <NavLink className="text-xl link " to={ABOUT}>
            About
          </NavLink>
        </Col>

        <Col xs={24} md={4} className="my-auto">
          <NavLink className="text-xl link" to={GALLERY}>
            Gallery
          </NavLink>
        </Col>
        <Col xs={24} md={4} className="my-auto ">
          <NavLink className="text-xl link" to={EVENTS}>
            Events
          </NavLink>
        </Col>
        <Col xs={24} md={4} className="my-auto">
          <NavLink className="text-xl link" to={CONTACT_US}>
            Contact
          </NavLink>
        </Col>
        <Col xs={24} md={4} className="flex justify-center">
          <img
            className="border rounded-full "
            src="https://placehold.co/40x40"
            alt="profile image"
          ></img>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
