function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      {/* HERO */}

      <h1
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginBottom: "10px",
        }}
      >
        Hello, Harshitha 👋
        <br />
        Welcome to User Dashboard
      </h1>

      <p
        style={{
          color: "#8EA7D8",
          marginBottom: "40px",
        }}
      >
        Continue learning journey and progress.
      </p>

      {/* GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(360px,1fr))",
          gap: "24px",
        }}
      >

        {/* RECENT LEARNING */}

        <div style={card}>

          <h2>Recent Learning</h2>

          <div style={history}>
            Explain Photosynthesis
          </div>

          <div style={history}>
            Teach me Python loops
          </div>

          <div style={history}>
            Explain React Components
          </div>

        </div>


        {/* NOTES */}

        <div style={card}>

          <h2>Notes Generator</h2>

          <input
            placeholder="Enter topic..."
            style={input}
          />

          <textarea
            placeholder="Related notes will appear here"
            style={textarea}
          />

        </div>


        {/* QUESTION */}

        <div style={card}>

          <h2>Question of the Day</h2>

          <p>
            Explain one real-world use of AI.
          </p>

          <textarea
            placeholder="Write answer..."
            style={textarea}
          />

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "18px",
            }}
          >

            <button style={primary}>
              Answer
            </button>

            <button style={secondary}>
              Ask AI
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

const card = {
  background: "#0F1B33",
  padding: "28px",
  borderRadius: "18px",
};

const history = {
  background: "#16233F",
  padding: "14px",
  borderRadius: "12px",
  marginTop: "12px",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
};

const textarea = {
  width: "100%",
  height: "170px",
  marginTop: "16px",
  padding: "14px",
  borderRadius: "10px",
};

const primary = {
  background: "#7C3AED",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
};

const secondary = {
  background: "#16233F",
  color: "#8EA7D8",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
};

export default Dashboard;