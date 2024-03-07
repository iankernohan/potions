import { useAppSelector } from "../../redux/hooks";
import FeaturedProduct from "../UI/FeaturedProduct";
import Heading from "../UI/Heading";

export default function FeaturedProducts() {
  const allPotions = useAppSelector((state) => state.potions.potions);

  return (
    <div className="featured-products">
      <Heading title="Featured Products" />
      <section>
        <FeaturedProduct potion={allPotions[8]} />
        <FeaturedProduct potion={allPotions[4]} />
        <FeaturedProduct potion={allPotions[7]} />
        <FeaturedProduct potion={allPotions[2]} />
        <FeaturedProduct potion={allPotions[3]} />
        <FeaturedProduct potion={allPotions[5]} />
      </section>
    </div>
  );
}
