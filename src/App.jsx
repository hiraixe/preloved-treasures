import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const products = [
    { id: 1, name: "Vintage Brown Bag", price: 1200, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Classic Black Tote", price: 1500, image: "https://via.placeholder.com/200" }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
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
    <div>
      {/* HEADER WITH CART COUNT */}
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail products={products} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItem={removeItem}
              total={total}
              checkout={checkout}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;