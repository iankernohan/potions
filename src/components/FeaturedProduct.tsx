import Button from "./Button";
import StarRating from "./StarRating";

interface Props {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export default function FeaturedProduct({ image, name, price, rating }: Props) {
  const formatter = new Intl.NumberFormat("en-US");

  return (
    <div className="featured-product">
      <img src={image} />
      <h5>{name}</h5>
      <div>
        <StarRating rating={rating} />
      </div>
      <p>
        {formatter.format(price)} <small>Gold Coins</small>
      </p>
      <Button
        text="Add to Cart"
        style={{ padding: "5px 8px", fontSize: "0.9rem" }}
      />
    </div>
  );
}
