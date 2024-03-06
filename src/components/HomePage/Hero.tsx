import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <section className="text">
        <h2>Not your average potion...</h2>
        <p>The best potions at the best price for any deed imaginable.</p>
        <Button onClick={() => navigate("/products")} text="Explore Products" />
      </section>
      <section className="images">
        <img src="./image0.png" width={"120px"} />
        <img src="./image5.png" width={"120px"} />
        <img src="./image6.png" width={"120px"} />
      </section>
    </div>
  );
}
