import FeaturedProducts from "./components/HomePage/FeaturedProducts";
import HighlightProduct from "./components/HomePage/HighlightProduct";
import ImageSection from "./components/HomePage/ImageSection";
import Hero from "./components/HomePage/Hero";
import NewArrivals from "./components/HomePage/NewArrivals";
import Reviews from "./components/HomePage/Reviews";
import Sponsors from "./components/HomePage/Sponsors";
import "./components/HomePage/HomePage.css";

function App() {
  return (
    <>
      <Hero />
      <ImageSection />
      <FeaturedProducts />
      <NewArrivals />
      <HighlightProduct />
      <Reviews />
      <Sponsors />
    </>
  );
}

export default App;
