import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f7f9fb" }}>

      {/* HERO SECTION */}
      <div
        style={{
          height: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: "linear-gradient(180deg, #e2ebf0, #f7f9fb)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            maxWidth: "1000px",
          }}
        >
          {/* IMAGE */}
          <img
            src="https://i.pinimg.com/1200x/33/fe/fe/33fefe37a970df6ab954fb5a2021ec89.jpg"
            alt="Preloved Bags"
            style={{
              width: "420px",
              height: "520px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />

          {/* TEXT */}
          <div>
            <h1 style={{ fontSize: "42px", color: "#3b5b73" }}>
              Preloved Treasures 👜
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#5f6f7a",
                maxWidth: "350px",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}
            >
              Curated second-hand bags with timeless style.
              Sustainable fashion, made beautiful again ✨
            </p>

            <button
              onClick={() => navigate("/products")}
              style={{
                padding: "12px 20px",
                background: "#3b5b73",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Enter Shop →
            </button>
          </div>
        </div>
      </div>

      {/* WHITE INFO SECTION */}
      <div
        style={{
          background: "#ffffff",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 style={{ color: "#3b5b73", marginBottom: "15px" }}>
            About Our Shop
          </h2>

          <p
            style={{
              color: "#5f6f7a",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Preloved Treasures is a curated collection of second-hand bags
            chosen for their quality, character, and timeless appeal.  
            We believe in giving fashion a second life — reducing waste
            while keeping style alive. Every piece tells a story,
            and now it’s ready for yours ✨
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;