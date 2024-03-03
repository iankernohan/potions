import FeaturedProduct from "./FeaturedProduct";
import Heading from "./Heading";

export default function NewArrivals() {
  return (
    <div className="new-arrivals">
      <Heading title="New Arrivals" />
      <section>
        <FeaturedProduct
          image="./image0.png"
          name="Ignis Aeternus"
          price={2000}
          rating={4}
        />
        <FeaturedProduct
          image="./image10.png"
          name="Venenum Amoris"
          price={2750}
          rating={5}
        />
        <FeaturedProduct
          image="./image1.png"
          name="Nebulae Caelestes"
          price={1500}
          rating={4}
        />
      </section>
    </div>
  );
}
