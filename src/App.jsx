import { useState } from "react";
import ProductCard from "./ProductCard";
import Home from "./Home";

function App() {
  const products = [
    {
      id: 1,
      name: "Vintage Brown Bag",
      price: 1200,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Classic Black Tote",
      price: 1500,
      image: "https://via.placeholder.com/200"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    alert("Checkout successful 👜✨");
    setCart([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* 🧭 HOME ADDED PROPERLY */}
      <Home />

      <h1>Preloved Shop 👜</h1>

      {/* PRODUCTS */}
      <div style={{ display: "flex", gap: "16px" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* CART */}
      <h2 style={{ marginTop: "30px" }}>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <p>
                {item.name} × {item.quantity} = ₱
                {item.price * item.quantity}
              </p>

              <button onClick={() => removeItem(item.id)}>
                Remove ❌
              </button>
            </div>
          ))}

          <h3>Total: ₱{total}</h3>

          <button onClick={checkout}>
            Checkout 💳
          </button>
        </>
      )}
    </div>
  );
}

export default App;