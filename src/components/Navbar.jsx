import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#081225"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        {/* LEFT */}
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "800",
            letterSpacing: "-1px",
            color: "white"
          }}
        >
          AI Tutor
        </h1>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "42px"
          }}
        >

          <Link to="/learn">

<span>

Learn

</span>

</Link>

          <span style={{ cursor: "pointer", color: "white" }}>
            Dashboard
          </span>

          {/* LOGIN */}
          <Link to="/login">
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "6px"
              }}
            >
              Login
            </button>
          </Link>

          {/* REGISTER */}
          <Link to="/register">
            <button
              style={{
                background: "#7C3AED",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >
              Register
            </button>
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;