import potions from "../../data/potions";
import FeaturedProduct from "../UI/FeaturedProduct";
import "./ProductPage.css";

export default function ProductsPage() {
  return (
    <div className="product-page">
      <div className="header">
        <h2>All Products</h2>
        <select name="filter" id="filter">
          <option value="low">Price (low to high)</option>
          <option value="high">Price (high to low)</option>
          <option value="Name">Name</option>
        </select>
      </div>

      <section className="products">
        {potions.map((potion) => (
          <FeaturedProduct potion={potion} />
        ))}
      </section>
    </div>
  );
}
