// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LogoAnimation from "./Components/Splachscreen";
import Home from "./Components/Hero";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Testimonias from "./Components/Testimonials"
import Gallery from "./Components/Gallery";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <Router>
      {!splashDone ? (
        <LogoAnimation onFinish={() => setSplashDone(true)} />
      ) : (
        <>
          <Navbar />
          <div className="pt-20 flex flex-col min-h-screen">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Service />} /> {/* ✅ Fixed path */}
                <Route path="/testimonials" element={<Testimonias/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
