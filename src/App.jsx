import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const Lines = lazy(() => import("./pages/Lines/Lines"));
const WhereToBuy = lazy(() => import("./pages/WhereToBuy/WhereToBuy"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span>Perfumaria pet</span>
      <i aria-hidden="true" />
      <small>Preparando a coleção</small>
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
          <Route path="produtos" element={<Products />} />
          <Route path="produtos/:slug" element={<ProductDetail />} />
          <Route path="linhas" element={<Lines />} />
          <Route path="onde-comprar" element={<WhereToBuy />} />
          <Route path="contato" element={<Contact />} />
          <Route path="politica-de-privacidade" element={<Privacy />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
