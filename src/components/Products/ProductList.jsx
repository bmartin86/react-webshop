import { useState, useEffect } from 'react';
import { ProductCard } from "./ProductCard";
import { ProductsSidebar } from "./ProductsSidebar";
// import { productList } from '../../assets/productList';
import './styles/Products.css';

function ProductList ({productList}) {
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
            {productList?.map(product => {
                console.log("Each product in the list =>", product)
              return(
                <article className="productCard" key={product.id}>
                  <ProductCard product={product}/>
                </article>
                )}
              )
            }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export { ProductList }

