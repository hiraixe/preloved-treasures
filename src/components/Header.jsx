import { Link, useLocation } from "react-router-dom";

function Header({ cartCount }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <h2>Preloved Shop 👜</h2>

      <nav>
        <Link to="/" style={{ fontWeight: isActive("/") ? "bold" : "normal" }}>
          Home
        </Link>

        <Link to="/products" style={{ fontWeight: isActive("/products") ? "bold" : "normal" }}>
          Products
        </Link>

        <Link to="/cart" style={{ fontWeight: isActive("/cart") ? "bold" : "normal" }}>
          Cart
        </Link>

        <Link to="/contact" style={{ fontWeight: isActive("/contact") ? "bold" : "normal" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;