import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import "./responsive.css";

// 👜 IMAGES
import bally from "./assets/bally.jpg";
import cln from "./assets/cln.jpg";
import coach from "./assets/coach.jpg";
import dior from "./assets/dior.jpg";
import gucci from "./assets/gucci.jpg";
import mikana from "./assets/mikana.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "CLN Wallet",
      price: 169.0,
      image: cln,
    },
    {
      id: 2,
      name: "Mikana Wallet Bag",
      price: 349.0,
      image: mikana,
    },
    {
      id: 3,
      name: "Coach Sling Bag",
      price: 479.0,
      image: coach,
    },
    {
      id: 4,
      name: "Mini Dior Bag",
      price: 349.0,
      image: dior,
    },
    {
      id: 5,
      name: "Gucci Sling Bag",
      price: 449.0,
      image: gucci,
    },
    {
      id: 6,
      name: "Bally Handbag",
      price: 249.0,
      image: bally,
    },
  ];

  const [cart, setCart] = useState([]);

  // ➕ ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // 💰 TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🧺 CHECKOUT
  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty 👜");
      return;
    }

    const finalTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    alert(`Checkout successful 👜✨\nTotal: ₱${finalTotal}`);

    setCart([]);
  };

  return (
    <div>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              products={products}
              addToCart={addToCart}
            />
          }
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