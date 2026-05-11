import { useState } from "react";

function Products({ products, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "80vh",
        background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
      }}
    >
      <h1 style={{ color: "#3b5b73", marginBottom: "20px" }}>
        Our Collection 👜
      </h1>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",

          // 📱 MOBILE FIX
          gap: "14px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#ffffff",
              border: "1px solid #cfd9df",
              borderRadius: "12px",
              padding: "12px",
              transition: "0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.name}
              onClick={() => setSelectedProduct(p)}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
                cursor: "pointer",

                // 📱 MOBILE FIX
                maxHeight: "180px",
              }}
            />

            {/* NAME */}
            <h3 style={{ color: "#3b5b73", fontSize: "16px" }}>
              {p.name}
            </h3>

            {/* PRICE */}
            <p style={{ color: "#5f6f7a" }}>₱{p.price}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",

              // 📱 MOBILE FIX
              width: "100%",
              maxWidth: "360px",
              maxHeight: "90vh",
              overflowY: "auto",

              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            {/* IMAGE */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",

                // 📱 MOBILE FIX
                maxHeight: "200px",
              }}
            />

            {/* NAME */}
            <h2 style={{ color: "#3b5b73" }}>
              {selectedProduct.name}
            </h2>

            {/* PRICE */}
            <p style={{ color: "#3b5b73", fontWeight: "bold" }}>
              ₱{selectedProduct.price}
            </p>

            {/* ADD TO CART */}
            <button
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#3b5b73",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;