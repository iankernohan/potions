import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import "./ProductInfoPage.css";
import Heading from "../UI/Heading";
import FeaturedProduct from "../UI/FeaturedProduct";
import { Potion } from "../../redux/potionsSlice";
import { useAppSelector } from "../../redux/hooks";

export default function ProductInfoPage() {
  const { id } = useParams();
  const potions = useAppSelector((state) => state.potions.potions);
  const potion: Potion = potions[Number(id)];

  const related: Potion[] = [];
  for (let i = 0; i < 4; i++) {
    const index: number = Math.floor(Math.random() * potions.length);
    related.push(potions[index]);
  }

  console.log(related);
  return (
    <div className="product-info-page">
      <section className="product">
        <img src={"." + potion.image} />
        <div>
          <h1>{potion.name}</h1>
          <h2>
            {potion.price} <small>Gold coins</small>
          </h2>
          <div className="options">
            <input type="number" defaultValue={1} />
            <Button text="Add to Cart" />
          </div>
          <h3>Potion Details</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            mollitia quas quisquam nemo rem libero necessitatibus. Maiores
            quaerat aspernatur asperiores ex quae error aliquid tempore ipsum
            odio at. Numquam, nihil!
          </p>
        </div>
      </section>

      <section className="related">
        <Heading title="Related Products" />
        <div className="products">
          {related.map((potion) => (
            <FeaturedProduct
              potion={{ ...potion, image: "." + potion.image }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
