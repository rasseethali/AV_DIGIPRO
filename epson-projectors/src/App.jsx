import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Preloader from "./Components/Preloader";
import ScrollToTop from "./layouts/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const hideNavbar = location.pathname === "/enquiry";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main className="bg-white overflow-hidden scroll-smooth">
      <ScrollToTop />

      {!hideNavbar && <Navbar />}

      <AppRoutes />

      {!hideNavbar && <Footer />}
    </main>
  );
}

export default App;