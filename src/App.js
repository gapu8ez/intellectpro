import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Info from "./components/Infos";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/info" element={<Layout><Info /></Layout>} />
        <Route path="/Home" element={<Layout><Home /></Layout>} />
        <Route path="/Product" element={<Layout><Product /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
