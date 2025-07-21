import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/Mainlayout";
import Home from "./Pages/Home";
import Exhibits from "./Pages/Exhibits";
import ExhibitDetail from "./Pages/ExhibitDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exhibits" element={<Exhibits />} />
        <Route path="/exhibit/:id" element={<ExhibitDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;