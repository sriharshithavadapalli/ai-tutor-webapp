function Summary() {
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
        Learning Summary
      </h1>

      <p
        style={{
          color: "#8EA7D8",
          marginBottom: "30px",
        }}
      >
        Review your understanding and revise key points.
      </p>

      <div style={card}>
        <h3>Completed Topics</h3>

        <ul>
          <li>Introduction</li>
          <li>Key Concepts</li>
          <li>Examples</li>
          <li>Interactive Questions</li>
        </ul>
      </div>

      <div style={card}>
        <h3>AI Recommendation</h3>

        <p>
          Revise weak areas and continue to quizzes.
        </p>
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

export default Summary;