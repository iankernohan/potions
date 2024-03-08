import { useParams } from "react-router-dom";
import { PiMaskSadDuotone } from "react-icons/pi";

export default function PageNotFound() {
  const { unknown } = useParams();

  return (
    <div className="page-not-found">
      <span>
        <PiMaskSadDuotone />
      </span>
      <h2>Page not found...</h2>
      <h3>"/{unknown}"</h3>
    </div>
  );
}
