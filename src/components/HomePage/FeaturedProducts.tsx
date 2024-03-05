import FeaturedProduct from "../UI/FeaturedProduct";
import Heading from "../UI/Heading";

export default function FeaturedProducts() {
  return (
    <div className="featured-products">
      <Heading title="Featured Products" />
      <section>
        <FeaturedProduct
          potion={{
            image: "./image9.png",
            name: "Flos Mortis",
            price: 1500,
            rating: 4,
            id: 8,
          }}
        />

        <FeaturedProduct
          potion={{
            image: "./image4.png",
            name: "Aurora Somniorum",
            price: 1500,
            rating: 4,
            id: 4,
          }}
        />
        <FeaturedProduct
          potion={{
            image: "./image9.png",
            name: "Flos Mortis",
            price: 1500,
            rating: 4,
            id: 8,
          }}
        />

        <FeaturedProduct
          potion={{
            image: "./image2.png",
            name: "Sapientia Arcana",
            price: 2750,
            rating: 5,
            id: 2,
          }}
        />
        <FeaturedProduct
          potion={{
            image: "./image3.png",
            name: "Gelum Ignis",
            price: 2000,
            rating: 4,
            id: 3,
          }}
        />
        <FeaturedProduct
          potion={{
            image: "./image5.png",
            name: "Lumen Noctis",
            price: 2750,
            rating: 5,
            id: 5,
          }}
        />
      </section>
    </div>
  );
}
