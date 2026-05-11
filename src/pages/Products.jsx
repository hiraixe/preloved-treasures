import { Link } from "react-router-dom";

function Products({ products, addToCart }) {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "20px" }}>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
          
          <Link to={`/product/${p.id}`}>
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "150px", borderRadius: "8px" }}
            />
            <h3>{p.name}</h3>
          </Link>

          <p>₱{p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart 🛒
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;