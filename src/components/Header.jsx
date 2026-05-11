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
    whiteSpace: "nowrap",
    fontSize: "14px",
  });

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #cfd9df, #e2ebf0)",
        borderBottom: "1px solid #c7d2da",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "12px 16px",
      }}
    >
      {/* WRAPPER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          // 👇 THIS is the real fix
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {/* LOGO */}
        <h2
          style={{
            margin: 0,
            color: "#3b5b73",
            fontSize: "16px",

            // 👇 forces full width on small screens
            flex: "1 1 100%",
            textAlign: "center",
          }}
        >
          Angelica's Preloved Treasures 👜
        </h2>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
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
      </div>
    </header>
  );
}

export default Header;