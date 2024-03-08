import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="footer">
      <section>
        <h5>Useful Links</h5>
        <ul>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/coupons"}>Coupons</Link>
          </li>
          <li>
            <Link to={"/returnPolicy"}>Return Policy</Link>
          </li>
          <li>
            <Link to={"/joinAffiliate"}>Join Affiliate</Link>
          </li>
        </ul>
      </section>

      <section>
        <Logo />
        <p>
          Our Purpose is to brew the best potions and to provide our customer
          base with the highest quality of products.
        </p>
      </section>

      <section>
        <h5>Follow Us</h5>
        <ul>
          <li>
            <Link to={"/facebook"}>Facebook</Link>
          </li>
          <li>
            <Link to={"/instagram"}>Instagram</Link>
          </li>
          <li>
            <Link to={"/twitter"}>Twitter</Link>
          </li>
          <li>
            <Link to={"/tiktok"}>Tik Tok</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
