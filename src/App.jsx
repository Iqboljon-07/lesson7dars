import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

const App = () => {
  console.log(import.meta.env.VITE_TITLE);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aloqa" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
