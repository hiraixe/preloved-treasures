function Contact() {
  return (
    <div
      style={{
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: "500px",
          border: "1px solid #cfd9df",
        }}
      >
        <h1 style={{ color: "#3b5b73", marginBottom: "20px" }}>
          Contact 📞
        </h1>

        <p style={{ marginBottom: "10px", color: "#5f6f7a" }}>
          📍 Ayala, Magalang, Pampanga
        </p>

        <p style={{ marginBottom: "10px", color: "#5f6f7a" }}>
          📱 0994-562-0378
        </p>

        <p style={{ color: "#5f6f7a" }}>
          ✉️ mariamariaangelicagomez@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;