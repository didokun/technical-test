import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/About.page";
import Home from "./pages/home/Home.page";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

