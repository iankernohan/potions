import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <h2>Your cart is currently empty</h2>
      <button onClick={() => navigate("/products")} className="button">
        Explore Products
      </button>
    </div>
  );
}
