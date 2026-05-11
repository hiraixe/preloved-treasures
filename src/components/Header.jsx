import { Link, useLocation } from "react-router-dom";

function Header({ cartCount }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "#3b5b73" : "#5f6f7a",
    fontWeight: isActive(path) ? "600" : "400",
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "0.2s",
  });

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 30px",
        background: "linear-gradient(90deg, #cfd9df, #e2ebf0)",
        borderBottom: "1px solid #c7d2da",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0, color: "#3b5b73" }}>
        Angelica's Preloved Treasures 👜
      </h2>

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={linkStyle("/")}>
          Home
        </Link>

        <Link to="/products" style={linkStyle("/products")}>
          Products
        </Link>

        <Link to="/cart" style={linkStyle("/cart")}>
          Cart 🛒 ({cartCount})
        </Link>

        <Link to="/contact" style={linkStyle("/contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;