import { useState } from "react";

function Cart({ cart, removeItem, checkout }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [payment, setPayment] = useState("COD");
  const [paymentNumber, setPaymentNumber] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    if (!name || !address || !contact) {
      alert("Please complete your details 🧠");
      return;
    }

    if ((payment === "GCash" || payment === "PayMaya") && !paymentNumber) {
      alert("Please enter your payment number 📱");
      return;
    }

    // ✅ calculate total BEFORE clearing anything
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setFinalTotal(totalAmount);
    setConfirmed(true);

    // send cart snapshot to App.jsx
    checkout(cart);
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
            width: "100%",
          }}
        >
          <h1 style={{ color: "#3b5b73" }}>Order Confirmed 🎉</h1>

          <p><b>Name:</b> {name}</p>
          <p><b>Address:</b> {address}</p>
          <p><b>Contact:</b> {contact}</p>
          <p><b>Payment:</b> {payment}</p>

          {(payment === "GCash" || payment === "PayMaya") && (
            <p><b>Payment Number:</b> {paymentNumber}</p>
          )}

          <hr style={{ margin: "10px 0" }} />

          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Total: ₱{finalTotal}
          </p>

          <p style={{ marginTop: "15px", color: "#5f6f7a" }}>
            Thanks for shopping 👜✨
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

      {cart.length === 0 ? (
        <p style={{ color: "#5f6f7a" }}>Your cart is empty 🥲</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#ffffff",
                border: "1px solid #cfd9df",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>
                {item.name} × {item.quantity} = ₱
                {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "#ff6b6b",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ color: "#3b5b73" }}>
            Total: ₱
            {cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}
          </h3>

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
            <h2 style={{ color: "#3b5b73" }}>Checkout 📦</h2>

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
            </select>

            {(payment === "GCash" || payment === "PayMaya") && (
              <input
                placeholder="Payment Number"
                value={paymentNumber}
                onChange={(e) => setPaymentNumber(e.target.value)}
                style={inputStyle}
              />
            )}

            <button
              onClick={handleCheckout}
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
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
};

export default Cart;