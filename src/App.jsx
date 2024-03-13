import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useState } from 'react';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MainComponent } from './components/MainComponent/MainComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { HomePage } from './components/HomePage/HomePage';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Products } from './components/Products/Products';
import { Blogs } from './components/Blogs/Blogs';
import { BlogDetail } from './components/BlogDetail/BlogDetail';
import './App.css';
import { AppWrapperComponent } from "./components/AppWrapperComponent/AppWrapperComponent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />}>
            <Route path="/contact" element={
              <Page title={"Contact"} 
                    description={"Lorem ipsum Contact"}
              />
            }
            >

            </Route>
          </Route>
        </Routes>
      </Router> */}
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} >
              <Route path="/blogs/:id" element={<BlogDetail />} />
            </Route>
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
      </Router>
    </>
  )
}

export default App
