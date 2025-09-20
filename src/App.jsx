import React from "react";
import Navbar from "./components/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopRated from "./components/category/Toprated";
import Electronics from "./components/category/Electronics";
import KidsWear from "./components/category/KidsWear";
import Menswear from "./components/category/Menswear";
import Women from "./components/category/Women";
import Hero from "./components/Hero";
import Products from "./components/products";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Store from "./components/Store";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

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
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
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