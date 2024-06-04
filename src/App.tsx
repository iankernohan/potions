import FeaturedProducts from "./components/HomePage/FeaturedProducts";
import HighlightProduct from "./components/HomePage/HighlightProduct";
import ImageSection from "./components/HomePage/ImageSection";
import Hero from "./components/HomePage/Hero";
import NewArrivals from "./components/HomePage/NewArrivals";
import Reviews from "./components/HomePage/Reviews";
import Sponsors from "./components/HomePage/Sponsors";
import "./components/HomePage/HomePage.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    scrollTo({ top: 0 });
  }, []);
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 100,
        opacity: 0,
      }}
    >
      <Hero />
      <ImageSection />
      <FeaturedProducts />
      <NewArrivals />
      <HighlightProduct />
      <Reviews />
      <Sponsors />
    </motion.div>
  );
}

export default App;
