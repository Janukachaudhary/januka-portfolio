import React from "react";
import SideBar from "./assets/Components/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Service from "../src/Pages/Service";
import Portfolio from "../src/Pages/Portfolio";
import Contact from "../src/Pages/Contact";

// Import your Welcome Screen
import WelcomeScreen from "./assets/Components/WelcomeScreen"; // Adjust path to where you saved it

function App() {
  return (
    <WelcomeScreen>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 bg-gray-100 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </WelcomeScreen>
  );
}

export default App;