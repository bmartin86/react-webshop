import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { React } from "react";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { HomePage } from "./components/HomePage/HomePage";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Products } from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { Blogs } from "./components/Newsroom/Blogs";
import { BlogDetail } from "./components/Newsroom/BlogDetail";
import { ProductDetail } from "./components/Products/ProductDetail";
import { ProductList } from "./components/Products/ProductList";
import { CookiePolicy } from "./components/Legal/CookiePolicy";
import { PrivacyPolicy } from "./components/Legal/PrivacyPolicy";
import { ReturnPolicy } from "./components/Legal/ReturnPolicy";
import { ShippingPolicy } from "./components/Legal/ShippingPolicy";
import { TermsAndConditions } from "./components/Legal/TermsAndConditions";
import { ErrorPage } from "./components/Pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail" element={<Outlet />}>
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
            </Route>
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="*"
              element={<ErrorPage title={"404 - Page not found"} />}
            />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
