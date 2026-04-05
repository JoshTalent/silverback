import { Routes, Route } from "react-router-dom";
import MobileOverflowFix from "./MobileOverflowFix";

// import main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Athletes from "./pages/Athletes";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import UpCammingEvents from "./pages/upCammingEvents";
import PastEvents from "./pages/PastEvents"

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {" "}
      <MobileOverflowFix />
      <Navbar />
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/upcoming" element={<UpCammingEvents />} />
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
