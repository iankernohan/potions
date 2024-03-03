import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HighlightProduct from "./components/HighlightProduct";
import ImageSection from "./components/ImageSection";
import Main from "./components/Main";
import NewArrivals from "./components/NewArrivals";
import Reviews from "./components/Reviews";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Header />
      <Main />
      <ImageSection />
      <FeaturedProducts />
      <NewArrivals />
      <HighlightProduct />
      <Reviews />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
