import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

export default function AppLayout() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main className="app-layout">
        <Navbar />
        <Toaster toastOptions={{ className: "toast" }} />
        <motion.div key={location.pathname}>
          <Outlet />
        </motion.div>
        <Footer />
      </main>
    </AnimatePresence>
  );
}
