function Medium() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "20px",
        }}
      >
        AI Tutor — Medium Mode
      </h1>

      <p
        style={{
          color: "#8EA7D8",
          marginBottom: "30px",
        }}
      >
        Balanced explanations with examples and concepts.
      </p>

      <div style={card}>

        <h3>Example Learning Style</h3>

        <p>
          Explain concepts clearly, give examples,
          and prepare for quizzes.
        </p>

      </div>

      <div style={card}>

        <h3>Ask AI Tutor</h3>

        <input
          placeholder="Type your question..."
          style={input}
        />

      </div>
    </div>
  );
}

const card = {
  background: "#0F1B33",
  padding: "24px",
  borderRadius: "18px",
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
};

export default Medium;