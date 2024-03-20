import { Link } from "react-router-dom"
function ProductList () {
  return (
    <ul>
      <li>Product 1</li>
      <li><Link to={"/product/2"}>Product 2</Link></li>
      <li>Product 3</li>
    </ul>
  )
}
export { ProductList }