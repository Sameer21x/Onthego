import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home"; 
import About from "../src/pages/AboutUs/AboutUs";  
import Contact from "../src/pages/ContactUs/ContactUs"; 
import FAQ from "../src/pages/FAQ/Faq"; 
import Rentals from "../src/pages/Rental/Rental";

// import NotFound from "./pages/NotFound"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rentals" element={<Rentals />} /> 


          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> Catch-all for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
