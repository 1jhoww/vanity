import { Outlet, useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useScrollToTop } from "../../hooks/useScrollToTop";

function SiteLayout() {
  useScrollToTop();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="main-content" data-home={isHome ? "true" : "false"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
