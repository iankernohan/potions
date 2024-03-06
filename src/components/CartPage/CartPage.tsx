import { useAppSelector } from "../../redux/hooks";
import CartItem from "./CartItem";
import "./CartPage.css";

export default function CartPage() {
  const cartPotions = useAppSelector((state) => state.cart.potions);
  const subtotal: number = cartPotions.reduce(
    (a, b) => a + b.price * b.quantity,
    0
  );
  const tax: number = subtotal * 0.06;
  const total: number = subtotal + tax;

  return (
    <div className="cart-page">
      <section className="col-labels">
        <span>Product</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </section>

      {cartPotions.map((potion) => (
        <CartItem key={potion.id} potion={potion} />
      ))}

      <section className="total-container">
        <section className="total">
          <div>
            <p>Subtotal</p>
            <p>
              {subtotal} <small>Gold coins</small>
            </p>
          </div>

          <div>
            <p>Tax</p>
            <p>
              {tax} <small>Gold coins</small>
            </p>
          </div>
          <div>
            <p>Total</p>
            <p>
              {total} <small>Gold coins</small>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
