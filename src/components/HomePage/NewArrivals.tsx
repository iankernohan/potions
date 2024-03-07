import { useAppSelector } from "../../redux/hooks";
import FeaturedProduct from "../UI/FeaturedProduct";
import Heading from "../UI/Heading";

export default function NewArrivals() {
  const allPotions = useAppSelector((state) => state.potions.potions);

  return (
    <div className="new-arrivals">
      <Heading title="New Arrivals" />
      <section>
        <FeaturedProduct potion={allPotions[0]} />
        <FeaturedProduct potion={allPotions[9]} />
        <FeaturedProduct potion={allPotions[1]} />
      </section>
    </div>
  );
}
