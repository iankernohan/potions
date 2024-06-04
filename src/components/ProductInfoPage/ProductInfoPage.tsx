import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import "./ProductInfoPage.css";
import Heading from "../UI/Heading";
import FeaturedProduct from "../UI/FeaturedProduct";
import { Potion } from "../../redux/potionsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { addPotion } from "../../redux/cartSlice";
import { motion } from "framer-motion";

export default function ProductInfoPage() {
  const [quantity, setQuantity] = useState("1");
  const [related, setRelated] = useState<Potion[]>([]);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const potions = useAppSelector((state) => state.potions.potions);
  const potion: Potion = potions[Number(id)];

  function handleAddToCart() {
    dispatch(addPotion({ ...potion, quantity: parseInt(quantity) }));
    setQuantity("1");
  }

  // Find 4 unique potions
  useEffect(() => {
    const allPotions: Potion[] = potions.filter((p) => p.id !== potion.id);
    const relatedPotions: Potion[] = [];
    for (let i = 0; i < 4; i++) {
      const index: number = Math.floor(Math.random() * allPotions.length);
      const newPotion: Potion = allPotions.splice(index, 1)[0];
      relatedPotions.push(newPotion);
    }
    setRelated(relatedPotions);
    scrollTo({ top: 0 });
  }, [potions, potion.id]);

  return (
    <motion.div
      className="product-info-page"
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
      <section className="product">
        <img src={"." + potion.image} />
        <div>
          <h1>{potion.name}</h1>
          <h2>
            {potion.price} <small>Gold coins</small>
          </h2>
          <div className="options">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min={1}
            />
            <Button text="Add to Cart" onClick={handleAddToCart} />
          </div>
          <h3>Potion Details</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            mollitia quas quisquam nemo rem libero necessitatibus. Maiores
            quaerat aspernatur asperiores ex quae error aliquid tempore ipsum
            odio at. Numquam, nihil!
          </p>
        </div>
      </section>

      <section className="related">
        <Heading title="Related Products" />
        <div className="products">
          {related.map((potion) => (
            <FeaturedProduct
              key={potion.id}
              potion={{ ...potion, image: "." + potion.image }}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
