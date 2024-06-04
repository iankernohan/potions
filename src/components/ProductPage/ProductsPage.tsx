import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Potion, sortByName, sortByPrice } from "../../redux/potionsSlice";
import FeaturedProduct from "../UI/FeaturedProduct";
import { motion } from "framer-motion";
import "./ProductPage.css";

export default function ProductsPage() {
  const [filterBy, setFilterBy] = useState("default");
  const potions = useAppSelector((state) => state.potions.potions);
  let filteredPotions: Potion[] = [...potions];

  switch (filterBy) {
    case "default":
      filteredPotions = potions;
      break;
    case "low":
      filteredPotions = sortByPrice(potions, false);
      break;
    case "high":
      filteredPotions = sortByPrice(potions, true);
      break;
    case "name":
      filteredPotions = sortByName(potions, true);
      break;
    case "name-backwards":
      filteredPotions = sortByName(potions, false);
      break;
    default:
      console.log("not an option");
  }

  return (
    <motion.div
      className="product-page"
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
      <div className="header">
        <h2>All Products</h2>
        <select
          name="filter"
          id="filter"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price (low to high)</option>
          <option value="high">Price (high to low)</option>
          <option value="name">Name</option>
          <option value="name-backwards">Name (backwards)</option>
        </select>
      </div>

      <section className="products">
        {filteredPotions.map((potion) => (
          <FeaturedProduct key={potion.id} potion={potion} />
        ))}
      </section>
    </motion.div>
  );
}
