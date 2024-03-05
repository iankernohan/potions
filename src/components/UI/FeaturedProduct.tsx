import { useNavigate } from "react-router-dom";
import { Potion } from "../../data/potions";
import Button from "./Button";
import StarRating from "./StarRating";

interface Props {
  potion: Potion;
}

export default function FeaturedProduct({ potion }: Props) {
  const formatter = new Intl.NumberFormat("en-US");
  const navigate = useNavigate();

  return (
    <div className="featured-product">
      <div onClick={() => navigate(`/potion/${potion.id}`)}>
        <img src={potion.image} />
        <h5>{potion.name}</h5>
      </div>
      <div>
        <StarRating rating={potion.rating} />
      </div>
      <p>
        {formatter.format(potion.price)} <small>Gold Coins</small>
      </p>
      <Button
        text="Add to Cart"
        style={{ padding: "5px 8px", fontSize: "0.9rem" }}
      />
    </div>
  );
}
