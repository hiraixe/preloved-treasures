import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message) {
      alert("Write a message first 💬");
      return;
    }
    alert("Message sent! We'll get back to you ✨");
    setMessage("");
  };

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
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {/* TITLE */}
        <h1 style={{ color: "#3b5b73", marginBottom: "10px" }}>
          Contact Us! 📞
        </h1>

        <p style={{ color: "#5f6f7a", marginBottom: "20px" }}>
          Got questions about a bag? Want more photos? We’re just one message away ✨
        </p>

        {/* CONTACT INFO */}
        <div style={{ marginBottom: "20px" }}>
          <p style={infoStyle}>
            📍 Ayala, Magalang, Pampanga
          </p>

          <p style={infoStyle}>
            📱{" "}
            <a href="tel:09945620378" style={linkStyle}>
              0994-562-0378
            </a>
          </p>

          <p style={infoStyle}>
            ✉️{" "}
            <a
              href="mailto:mariamariaangelicagomez@gmail.com"
              style={linkStyle}
            >
              mariamariaangelicagomez@gmail.com
            </a>
          </p>
        </div>

        {/* MESSAGE BOX */}
        <div>
          <h3 style={{ color: "#3b5b73" }}>Send a Message 💬</h3>

          <textarea
            placeholder="Hi! I'm interested in one of your bags..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              height: "100px",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #cfd9df",
              resize: "none",
            }}
          />

          <button
            onClick={handleSend}
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
            Send Message ✨
          </button>
        </div>

        {/* EXTRA TOUCH */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#9aa7b2",
            textAlign: "center",
          }}
        >
          We usually reply within a few hours 💌
        </p>
      </div>
    </div>
  );
}

const infoStyle = {
  color: "#5f6f7a",
  marginBottom: "8px",
};

const linkStyle = {
  color: "#3b5b73",
  textDecoration: "none",
  fontWeight: "500",
};

export default Contact;