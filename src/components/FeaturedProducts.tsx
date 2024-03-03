import FeaturedProduct from "./FeaturedProduct";
import Heading from "./Heading";

export default function FeaturedProducts() {
  return (
    <div className="featured-products">
      <Heading title="Featured Products" />
      <section>
        <FeaturedProduct
          image="./image8.png"
          name="Tenebris Lucis"
          price={2000}
          rating={4}
        />

        <FeaturedProduct
          image="./image4.png"
          name="Aurora Somniorum"
          price={1500}
          rating={4}
        />
        <FeaturedProduct
          image="./image9.png"
          name="Flos Mortis"
          price={1500}
          rating={4}
        />

        <FeaturedProduct
          image="./image2.png"
          name="Sapientia Arcana"
          price={2750}
          rating={5}
        />
        <FeaturedProduct
          image="./image3.png"
          name="Gelum Ignis"
          price={2000}
          rating={4}
        />
        <FeaturedProduct
          image="./image5.png"
          name="Lumen Noctis"
          price={2750}
          rating={5}
        />
      </section>
    </div>
  );
}
