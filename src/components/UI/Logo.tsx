import { GiPotionBall } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <h1 className="logo">
      <Link to={"/"}>
        <span>Pretty P</span>
        <GiPotionBall />
        <span>tions</span>
      </Link>
    </h1>
  );
}
