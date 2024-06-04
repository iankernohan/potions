import { useAppSelector } from "../../redux/hooks";
import CartItem from "./CartItem";
import "./CartPage.css";
import EmptyCart from "./EmptyCart";
import TotalPrice from "./TotalPrice";
import { motion } from "framer-motion";

export default function CartPage() {
  const cartPotions = useAppSelector((state) => state.cart.potions);

  return (
    <motion.div
      className="cart-page"
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
      {cartPotions.length > 0 ? (
        <>
          <section className="col-labels">
            <span>Product</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </section>

          {cartPotions.map((potion) => (
            <CartItem key={potion.id} potion={potion} />
          ))}

          <TotalPrice />
        </>
      ) : (
        <EmptyCart />
      )}
    </motion.div>
  );
}
