import StarRating from "./StarRating";
import { FaQuoteRight } from "react-icons/fa6";

interface Props {
  name: string;
  image: string;
  review: string;
}

export default function Review({ name, image, review }: Props) {
  return (
    <div className="review">
      <span>
        <FaQuoteRight color="orange" fontSize="2rem" />
      </span>
      <p>{review}</p>
      <StarRating rating={5} gap={4} />
      <img src={image} alt="" />
      <h5>{name}</h5>
    </div>
  );
}
