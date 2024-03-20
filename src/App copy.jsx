import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import './App.css';
import { AppWrapperComponent } from "./components/AppWrapperComponent/AppWrapperComponent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
          </Route>
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}
export default App
