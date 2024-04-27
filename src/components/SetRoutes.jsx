import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// components import
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Women from "../pages/women/Women";
import Kids from "../pages/kids/Kids";
import Men from "../pages/men/Men";

import Shop from "../pages/store/Shop";
import Carts from "../pages/carts/Carts";
import SingleProduct from "./singleProduct/SingleProduct";

import Login from "../pages/login/Login";

const SetRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Morat-Store/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Women" exact element={<Women />} />
        <Route path="/Kids" exact element={<Kids />} />
        <Route path="/Men" exact element={<Men />} />

        <Route path="/Store" exact element={<Shop />} />
        <Route path="/Carts" exact element={<Carts />} />
        <Route path="/Product" exact element={<SingleProduct />} />

        <Route path="/Login" exact element={<Login />} />
      </Routes>
    </div>
  );
};

export default SetRoutes;
