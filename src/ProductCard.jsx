import { Link } from "react-router-dom";
<Link to={`/product/${product.id}`}></Link>

function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      borderRadius: "12px",
      width: "200px"
    }}>
      
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <h3>{product.name}</h3>
      </Link>

      <p>₱{product.price}</p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;