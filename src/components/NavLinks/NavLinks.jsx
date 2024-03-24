import { Link } from 'react-router-dom'

function NavLinks () {
  return (
    <>
        <Link to="/">HOME</Link>
        <Link to="/products">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/blogs">NEWSROOM</Link>
    </>
  )
}
export { NavLinks }