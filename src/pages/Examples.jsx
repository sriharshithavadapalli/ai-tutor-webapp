function Examples() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      <h1 style={title}>
        Learning Examples
      </h1>

      <div style={card}>
        <h3>Example 1</h3>

        <p>
          AI explains a topic using simple real-world examples.
        </p>
      </div>

      <div style={card}>
        <h3>Example 2</h3>

        <p>
          Practice using short exercises and quizzes.
        </p>
      </div>
    </div>
  );
}

const title = {
  fontSize: "34px",
  marginBottom: "24px",
};

const card = {
  background: "#0F1B33",
  padding: "24px",
  borderRadius: "18px",
  marginBottom: "20px",
};

export default Examples;