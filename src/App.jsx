import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { React, useState } from 'react';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MainComponent } from './components/MainComponent/MainComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { HomePage } from './components/HomePage/HomePage';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Products } from './components/Products/Products';
import { Blogs } from './components/Newsroom/Blogs';
import { BlogDetail } from './components/Newsroom/BlogDetail';
import { ProductDetail } from "./components/Products/ProductDetail";
import './App.css';
import { AppWrapperComponent } from "./components/AppWrapperComponent/AppWrapperComponent";
import { ProductList } from "./components/Products/ProductList";
import { productList } from "./assets/productList";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductList productList={productList}/>} />
              <Route path="/products/:id" element={<ProductDetail productList={productList} />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail" element={<Outlet />} >
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
            </Route>  
            {/* <Route path="/product-detail" element={<Outlet />} >
              <Route path="/product-detail/:id" element={<ProductDetail />} />
            </Route> */}
          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<Page title={"Home Page"} />} />
            <Route path="/about" element={<Page title={"About"} />} />
            <Route path="/blogs" element={<Blog />}>
              <Route path="/blogs/:id" element={<BlogPost />} />
            </Route>
            <Route path="/contact" element={<Page title={"Contact"} />} />
            <Route path="/privacy-policy" element={<Page title={"Privacy Policy"} />} />
            <Route path="*" element={<Page title={"404 - Page not found"} />} />
          </Route>
        </Routes> */}
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
