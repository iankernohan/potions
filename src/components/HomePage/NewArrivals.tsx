import FeaturedProduct from "../UI/FeaturedProduct";
import Heading from "../UI/Heading";

export default function NewArrivals() {
  return (
    <div className="new-arrivals">
      <Heading title="New Arrivals" />
      <section>
        <FeaturedProduct
          potion={{
            image: "./image0.png",
            name: "Ignis Aeternus",
            price: 2000,
            rating: 4,
            id: 0,
          }}
        />
        <FeaturedProduct
          potion={{
            image: "./image10.png",
            name: "Venenum Amoris",
            price: 2750,
            rating: 5,
            id: 9,
          }}
        />
        <FeaturedProduct
          potion={{
            image: "./image1.png",
            name: "Nebulae Caelestes",
            price: 1500,
            rating: 4,
            id: 1,
          }}
        />
      </section>
    </div>
  );
}
