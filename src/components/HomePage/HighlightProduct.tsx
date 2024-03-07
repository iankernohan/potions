import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../UI/Button";
import { addPotion } from "../../redux/cartSlice";

export default function HighlightProduct() {
  const allPotions = useAppSelector((state) => state.potions.potions);
  const pupuraMysterium = allPotions[6];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleBuyNow() {
    dispatch(addPotion(pupuraMysterium));
    navigate("/cart");
  }

  return (
    <div className="highlight-product">
      <img src="./image6.png" alt="" />
      <section>
        <h4>Pupura Mysterium</h4>
        <p>
          Pupura Myssterium is a captivating potion that brings a touch of
          mystery and magic into your world. It's like stepping into a hidden
          realm where wonders await. So, If your're ready to embrace the
          enchantment, give Pupura Mysterium a try and let the magic unfold!
        </p>
        <Button onClick={handleBuyNow} text="Buy Now" />
      </section>
    </div>
  );
}
