import React from "react";
import Navbar from "./components/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopRated from "./components/category/Toprated";
import Electronics from "./components/category/Electronics";
import KidsWear from "./components/category/KidsWear";
import Menswear from "./components/category/Menswear";
import Women from "./components/category/Women";
import Hero from "./components/Hero";
import Products from "./components/products/products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Products />
            <TopProducts />
            <Banner />
            <Subscribe />
            <Testimonials />
          </>
        } />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/kids-wear" element={<KidsWear />} />
        <Route path="/mens-wear" element={<Menswear />} />
        <Route path="/women-wear" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;