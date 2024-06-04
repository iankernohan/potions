import { LuConstruction } from "react-icons/lu";
import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <motion.div
      className="construction"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <span>
        <LuConstruction />
      </span>
      <h2>Page currently under construction...</h2>
    </motion.div>
  );
}
