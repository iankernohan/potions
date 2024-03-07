import { Outlet } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  return (
    <main className="app-layout">
      <Navbar />
      <Toaster toastOptions={{ className: "toast" }} />
      <Outlet />
      <Footer />
    </main>
  );
}
