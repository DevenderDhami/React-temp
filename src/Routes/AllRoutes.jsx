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
import Latest from "../components/gallery/Latest";
import Featured from "../components/gallery/Featured";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={CONTACT_US} element={<Contact />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={EVENTS} element={<Events />} />
      <Route path={GALLERY} element={<Gallery />}>
        <Route index element={<Featured />} />
        <Route path="featured" element={<Featured />} />
        <Route path="latest" element={<Latest />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
