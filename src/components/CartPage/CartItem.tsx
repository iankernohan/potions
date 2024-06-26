import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removePotion,
} from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Potion } from "../../redux/potionsSlice";

interface Props {
  potion: Potion;
}

export default function CartItem({ potion }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="cart-item">
      <div className="item-info">
        <img
          src={potion.image}
          onClick={() => navigate(`/potion/${potion.id}`)}
        />
        <div>
          <h5 onClick={() => navigate(`/potion/${potion.id}`)}>
            {potion.name}
          </h5>
          <h6>
            {potion.price} <small>Gold coins</small>
          </h6>
          <p onClick={() => dispatch(removePotion(potion))}>Delete</p>
        </div>
      </div>

      <div className="quantity">
        <b>{potion.quantity}</b>
        <section className="buttons">
          <button
            className="button"
            onClick={() => dispatch(decrementQuantity(potion))}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => dispatch(incrementQuantity(potion))}
          >
            +
          </button>
        </section>
      </div>

      <p className="subtotal">
        {potion.price * potion.quantity} <small>Gold coins</small>
      </p>
    </section>
  );
}
