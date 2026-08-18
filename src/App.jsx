import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const WhereToBuy = lazy(() => import("./pages/WhereToBuy/WhereToBuy"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy/CookiePolicy"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <div className="page-loader__brand">
        <img
          src="/brand/vanity-pet-logo.png"
          alt="Vanity Pet"
          width="500"
          height="300"
        />
      </div>
      <i aria-hidden="true" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="a-marca" element={<About />} />
          <Route path="fragrancias" element={<Products />} />
          <Route
            path="produtos"
            element={<Navigate to="/fragrancias" replace />}
          />
          <Route path="produtos/:slug" element={<ProductDetail />} />
          <Route
            path="colecao"
            element={<Navigate to="/fragrancias" replace />}
          />
          <Route
            path="linhas"
            element={<Navigate to="/fragrancias" replace />}
          />
          <Route path="onde-comprar" element={<WhereToBuy />} />
          <Route path="contato" element={<Contact />} />
          <Route path="politica-de-privacidade" element={<Privacy />} />
          <Route path="politica-de-cookies" element={<CookiePolicy />} />
          <Route path="termos-de-uso" element={<Terms />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
