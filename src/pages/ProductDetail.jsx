import { useParams } from "react-router-dom";

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", borderRadius: "12px" }}
      />

      <h2>₱{product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductDetail;
