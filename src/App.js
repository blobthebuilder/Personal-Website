import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Components/Pre";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home Page/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects/Project";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div
        className="App"
        id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path=""
            element={<Home />}></Route>
          <Route
            path="about"
            element={<About />}></Route>
          <Route
            path="projects"
            element={<Projects />}></Route>
          <Route
            path="resume"
            element={<Resume />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
