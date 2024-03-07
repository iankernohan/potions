import { useAppSelector } from "../../redux/hooks";
import CartItem from "./CartItem";
import "./CartPage.css";
import EmptyCart from "./EmptyCart";
import TotalPrice from "./TotalPrice";

export default function CartPage() {
  const cartPotions = useAppSelector((state) => state.cart.potions);

  return (
    <div className="cart-page">
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
    </div>
  );
}
