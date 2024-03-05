import { useParams } from "react-router-dom";
import potions, { Potion } from "../../data/potions";
import Button from "../UI/Button";
import "./ProductInfoPage.css";

export default function ProductInfoPage() {
  const { id } = useParams();
  const potion: Potion = potions[Number(id)];
  console.log(potion);

  return (
    <div className="product-info-page">
      <section className="product">
        <img src={"." + potion.image} />
        <div>
          <h1>{potion.name}</h1>
          <h2>{potion.price}</h2>
          <div>
            <input type="number" />
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
    </div>
  );
}
