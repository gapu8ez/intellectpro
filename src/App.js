import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Info from "./components/Infos";
import Product from "./components/Product";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Meta from "./components/Meta";

const App = () => {
  return (
    <Router> {/* BrowserRouter-г HashRouter болгож өөрчилнө */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Meta title="Home Page" description="өөрчилнө." />
              <Navigate to="/Home" replace />
            </>
          } 
        />
        <Route 
          path="/info" 
          element={
            <Layout>
              <Meta title="Info Page" description="Өөрчилнө." />
              <Info />
            </Layout>
          } 
        />
        <Route 
          path="/Home" 
          element={
            <Layout>
              <Meta title="Home Page" description="Өөрчилнө." />
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/Product" 
          element={
            <Layout>
              <Meta title="Our Products" description="Өөрчилнө." />
              <Product />
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Layout>
              <Meta title="About Us" description="Өөрчилнө." />
              <About />
            </Layout>
          } 
        />
        <Route 
          path="/Contact" 
          element={
            <Layout>
              <Meta title="Contact Us" description="Өөрчилнө." />
              <Contact />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
