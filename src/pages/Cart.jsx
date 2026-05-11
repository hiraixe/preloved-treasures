import { useState } from "react";

function Cart({ cart, removeItem, total, checkout }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [payment, setPayment] = useState("COD");
  const [confirmed, setConfirmed] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    if (!name || !address || !contact) {
      alert("Please complete your details 🧠");
      return;
    }

    setConfirmed(true);
    checkout();
  };

  if (confirmed) {
    return (
      <div
        style={{
          padding: "40px 20px",
          minHeight: "80vh",
          background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "16px",
            border: "1px solid #cfd9df",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            maxWidth: "500px",
          }}
        >
          <h1 style={{ color: "#3b5b73" }}>Order Confirmed 🎉</h1>

          <p style={{ color: "#5f6f7a" }}><b>Name:</b> {name}</p>
          <p style={{ color: "#5f6f7a" }}><b>Address:</b> {address}</p>
          <p style={{ color: "#5f6f7a" }}><b>Contact:</b> {contact}</p>
          <p style={{ color: "#5f6f7a" }}><b>Payment:</b> {payment}</p>
          <p style={{ color: "#3b5b73" }}><b>Total:</b> ₱{total}</p>

          <p style={{ marginTop: "15px", color: "#5f6f7a" }}>
            Thanks for shopping at Preloved Treasures 👜✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "80vh",
        background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
      }}
    >
      <h1 style={{ color: "#3b5b73" }}>Cart 🛒</h1>

      {/* CART ITEMS */}
      {cart.length === 0 ? (
        <p style={{ color: "#5f6f7a" }}>Your cart is empty 🥲</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#ffffff",
                border: "1px solid #cfd9df",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <p style={{ color: "#5f6f7a" }}>
                {item.name} × {item.quantity} = ₱
                {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "transparent",
                  border: "1px solid #cfd9df",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  color: "#3b5b73",
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          <h3 style={{ color: "#3b5b73" }}>Total: ₱{total}</h3>

          {/* CHECKOUT FORM */}
          <div
            style={{
              marginTop: "30px",
              background: "#ffffff",
              border: "1px solid #cfd9df",
              borderRadius: "12px",
              padding: "20px",
              maxWidth: "500px",
            }}
          >
            <h2 style={{ color: "#3b5b73" }}>Checkout Details 📦</h2>

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={inputStyle}
            />

            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              style={inputStyle}
            >
              <option value="COD">Cash on Delivery (COD)</option>
              <option value="GCash">GCash</option>
              <option value="PayMaya">PayMaya</option>
              <option value="Card">Credit / Debit Card</option>
            </select>

            <button
              onClick={handleCheckout}
              style={{
                marginTop: "10px",
                padding: "10px 15px",
                background: "#3b5b73",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Confirm Checkout 💳
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  margin: "8px 0",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cfd9df",
  outline: "none",
  color: "#3b5b73",
};

export default Cart;