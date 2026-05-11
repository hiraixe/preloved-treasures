import { useState } from "react";

function Cart({ cart, removeItem, checkout }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [payment, setPayment] = useState("COD");
  const [paymentNumber, setPaymentNumber] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const currentTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

    setFinalTotal(currentTotal);
    setConfirmed(true);

    checkout({
      cart,
      total: currentTotal,
      customer: { name, address, contact, payment, paymentNumber },
    });
  };

  if (confirmed) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Order Confirmed 🎉</h1>

          <p><b>Name:</b> {name}</p>
          <p><b>Address:</b> {address}</p>
          <p><b>Contact:</b> {contact}</p>
          <p><b>Payment:</b> {payment}</p>

          {(payment === "GCash" || payment === "PayMaya") && (
            <p><b>Payment Number:</b> {paymentNumber}</p>
          )}

          <hr style={{ margin: "12px 0" }} />

          <p style={styles.total}>Total: ₱{finalTotal}</p>

          <p style={styles.thanks}>Thanks for shopping 👜✨</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Cart 🛒</h1>

      {cart.length === 0 ? (
        <p style={styles.text}>Your cart is empty 🥲</p>
      ) : (
        <>
          {/* ITEMS */}
          {cart.map((item) => (
            <div key={item.id} style={styles.item}>
              <p style={{ margin: 0 }}>
                {item.name} × {item.quantity} = ₱
                {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                style={styles.removeBtn}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 style={styles.total}>
            Total: ₱{currentTotal}
          </h3>

          {/* CHECKOUT FORM */}
          <div style={styles.form}>
            <h2 style={styles.subtitle}>Checkout 📦</h2>

            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
            <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={styles.input} />
            <input placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} style={styles.input} />

            <select value={payment} onChange={(e) => setPayment(e.target.value)} style={styles.input}>
              <option value="COD">Cash on Delivery</option>
              <option value="GCash">GCash</option>
              <option value="PayMaya">PayMaya</option>
            </select>

            {(payment === "GCash" || payment === "PayMaya") && (
              <input
                placeholder="Payment Number"
                value={paymentNumber}
                onChange={(e) => setPaymentNumber(e.target.value)}
                style={styles.input}
              />
            )}

            <button onClick={handleCheckout} style={styles.checkoutBtn}>
              Confirm Checkout 💳
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* 🧼 CLEAN STYLES (this removes weird pink / default browser styles) */
const styles = {
  page: {
    padding: "40px 20px",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid #cfd9df",
    maxWidth: "500px",
    margin: "auto",
  },

  item: {
    background: "#fff",
    border: "1px solid #cfd9df",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: "100%",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #cfd9df",
    outline: "none",
  },

  removeBtn: {
    background: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  checkoutBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    background: "#3b5b73",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  title: {
    color: "#3b5b73",
    marginBottom: "15px",
  },

  subtitle: {
    color: "#3b5b73",
  },

  text: {
    color: "#5f6f7a",
  },

  total: {
    color: "#3b5b73",
    marginTop: "10px",
    fontWeight: "bold",
  },

  thanks: {
    marginTop: "10px",
    color: "#5f6f7a",
  },
};

export default Cart;