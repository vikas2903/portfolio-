import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects";
import cc from "./assets/images/1.png";
import Queries from "./components/pages/Queries";
import Login from "./components/pages/Login"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/customer/queries" element={<Queries />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
