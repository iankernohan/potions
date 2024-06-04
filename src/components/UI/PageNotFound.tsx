import { useParams } from "react-router-dom";
import { PiMaskSadDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

export default function PageNotFound() {
  const { unknown } = useParams();

  return (
    <motion.div
      className="page-not-found"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <span>
        <PiMaskSadDuotone />
      </span>
      <h2>Page not found...</h2>
      <h3>"/{unknown}"</h3>
    </motion.div>
  );
}
