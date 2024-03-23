import { useState, useEffect } from 'react';
import { ProductCard } from "./ProductCard";
import { ProductsSidebar } from "./ProductsSidebar";
import './styles/Products.css';

function ProductList () {
  const [showDropdown, setShowDropdown] = useState(false);
        
  useEffect(() => {
    const closeDropdowns = () => {
      setShowDropdown(false);
    };

    document.addEventListener('click', closeDropdowns);

    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []); 

  return (
    <>
      <main>
        <div id="products-main-wrapper">
          <aside id="asideProducts">
            <ProductsSidebar  toggleDropdown={setShowDropdown} />
          </aside>

          <div id="products-div">
            <div id="products-header">
              <h2>All Products</h2>
            </div>
            <div id="products-wrapper">
              <article className="productCard">
                <ProductCard />
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export { ProductList }

