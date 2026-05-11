import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: isActive(path) ? "#3b5b73" : "#5f6f7a",
    fontWeight: isActive(path) ? "600" : "400",
    padding: "10px 0",
    display: "block",
  });

  return (
    <>
      {/* TOP HEADER BAR */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 16px",
          background: "linear-gradient(90deg, #cfd9df, #e2ebf0)",
          borderBottom: "1px solid #c7d2da",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* LOGO */}
        <h2
          style={{
            margin: 0,
            color: "#3b5b73",
            fontSize: "18px",
          }}
        >
          Angelica's Preloved Treasures 👜
        </h2>

        {/* DESKTOP NAV (kept simple, still visible) */}
        <nav
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#3b5b73" }}>
            Home
          </Link>

          <Link to="/products" style={{ textDecoration: "none", color: "#3b5b73" }}>
            Products
          </Link>

          <Link to="/cart" style={{ textDecoration: "none", color: "#3b5b73" }}>
            Cart 🛒 ({cartCount})
          </Link>

          <Link to="/contact" style={{ textDecoration: "none", color: "#3b5b73" }}>
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#3b5b73",
          }}
        >
          ☰
        </button>
      </header>

      {/* DARK OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            zIndex: 2000,
          }}
        />
      )}

      {/* SIDE DRAWER MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-270px",
          width: "270px",
          height: "100%",
          background: "#ffffff",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
          padding: "20px",
          transition: "0.3s ease",
          zIndex: 3000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          style={{
            alignSelf: "flex-end",
            fontSize: "18px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        {/* MENU LINKS */}
        <Link to="/" onClick={() => setOpen(false)} style={linkStyle("/")}>
          Home
        </Link>

        <Link
          to="/products"
          onClick={() => setOpen(false)}
          style={linkStyle("/products")}
        >
          Products
        </Link>

        <Link
          to="/cart"
          onClick={() => setOpen(false)}
          style={linkStyle("/cart")}
        >
          Cart 🛒 ({cartCount})
        </Link>

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          style={linkStyle("/contact")}
        >
          Contact
        </Link>
      </div>
    </>
  );
}

export default Header;