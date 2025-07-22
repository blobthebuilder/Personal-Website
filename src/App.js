import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./Components/Pre";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home Page/Home";
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
