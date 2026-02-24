import SideBar from './assets/Components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Home from "../src/Pages/Home";
import Service from "../src/Pages/Service";
import Portfolio from "../src/Pages/Portfolio";
import Contact from "../src/Pages/Contact";

function App() {
  return (
    <>
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 bg-gray-100 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;