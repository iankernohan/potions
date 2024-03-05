import { Outlet } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

export default function AppLayout() {
  return (
    <main className="app-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
