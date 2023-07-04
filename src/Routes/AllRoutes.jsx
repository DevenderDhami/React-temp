import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import {
  ABOUT,
  CONTACT_US,
  EVENTS,
  GALLERY,
  HOME,
} from "../constants/constants";
import Home from "../pages/home/Home";
import Events from "../pages/events/Events";
import Gallery from "../pages/gallery/Gallery";
import PageNotFound from "../pages/page404/Page404";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />}></Route>
      <Route path={CONTACT_US} element={<Contact />}></Route>
      <Route path={ABOUT} element={<About />}></Route>
      <Route path={EVENTS} element={<Events />}></Route>
      <Route path={GALLERY} element={<Gallery />}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
