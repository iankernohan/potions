import { useAppSelector } from "../../redux/hooks";

export default function TotalPrice() {
  const cartPotions = useAppSelector((state) => state.cart.potions);
  const subtotal: number = cartPotions.reduce(
    (a, b) => a + b.price * b.quantity,
    0
  );
  const tax: number = subtotal * 0.06;
  const total: number = subtotal + tax;

  return (
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
  );
}
