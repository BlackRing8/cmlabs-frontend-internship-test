import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/meals/:category" element={<Meals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
