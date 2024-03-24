import './styles/ProductDetail.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail ({productList}) {
  const URLParams = useParams();
  console.log("ID from URLParams =>",URLParams);
  console.log("List of products => ", productList);

  const currentProductId = URLParams.id;
  const currentProduct = productList.filter(item => {
    return item.id.toString() === currentProductId.toString();
  })
  console.log("Current product => ", currentProduct);
  const [product, setProduct] = useState(currentProduct[0]);
  console.log("Product => ", product);
  
  return (
    <main>
    <div className="main-product-wrapper">

      <div className="left-div">
            {product.images?.map(image => {
                console.log("Each image in the list =>", image)
              return(
                <div className="img-container"  key={image.id}>
                  <img src={image} alt="Model wearing product image" />
                </div>
                )}
              )
            }
        {/* <div className="img-container">
          <img src="/src/assets/images/products/wide-leg-pants.webp" alt="Model wearing product image" />
        </div>
        <div className="img-container">
          <img src="/src/assets/images/products/wide-leg-pants-3.webp" alt="Model wearing product image" />
        </div>
        <div className="img-container">
          <img src="/src/assets/images/products/wide-leg-pants-4.webp" alt="Product image" />
        </div>
        <div className="img-container">
          <img src="/src/assets/images/products/wide-leg-pants-2.webp" alt="Product image" />
        </div> */}
      </div>

      <div className="right-div">
        <div className="product-description-div">
          <h3>Wide-leg Pants</h3>
          <p className="price">44.99&euro; 
            <span className="old-price">&nbsp;59.99&euro;</span>
          </p>
          <p id="sizes">Sizes</p>
          <div className="sizes-div">
              <div className="size-box">XS</div>
              <div className="size-box">S</div>
              <div className="size-box">M</div>
              <div className="size-box">L</div>
              <div className="size-box">XL</div>
              <div className="size-box">XXL</div>
          </div>
          <div>
            <button id="add-to-bag">Add to bag</button>
          </div>
          <div>
            <a href="cart.html">
              <button id="see-cart">See cart</button>
            </a>
          </div>
        </div>
        <div className="description-text-div">
          <h3>Description & fit</h3>
          <p className="small-font">New Arrival</p>
          <p id="description-text">
            Loose-fit pants in woven fabric. Regular waist, narrow drawstring and covered elastic at waistband, and discreet side pockets. Straight, wide legs with creases at front and back.
          </p>
          <p className="small-font">Article number:1215834003</p>
          <ul>
            <li>
              <span className="bold">Model size: </span>
              The model is 177cm/5'10" and wears a size M
            </li>
            <li>
              <span className="bold">Length: </span>
              Long
            </li>
            <li>
              <span className="bold">Waist Rise: </span>
              Regular waist
            </li>
            <li>
              <span className="bold">Fit: </span>
              Loose fit
            </li>
            <li>
              <span className="bold">Style: </span>
              Pull-on Pants, Straight Leg, Wide leg
            </li>
            <li>
              <span className="bold">Description: </span>
              Cream/dark blue, Patterned
            </li>
            <li>
              <span className="bold">Concept: </span>
              MODERN CLASSIC
            </li>
          </ul>
        </div>
        <div className="materials-div">
          <h3>Materials</h3>
          <h4>Composition</h4>
          <ul>
            <li>
              <span className="bold">Shell:</span>
              Rayon 88%, Lyocell 10%, Linen 2%
            </li>
            <li>
              <span className="bold">Pocket lining:</span>
              Polyester 100%
            </li>
          </ul>
        </div>

      </div>
    </div>
  </main>
  )
}
export { ProductDetail }

