function Coding() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      <h1 style={title}>
        Coding Challenges
      </h1>

      <div style={card}>
        <h3>Challenge</h3>

        <p>
          Write a program to reverse a string.
        </p>

        <textarea
          placeholder="Write your answer..."
          style={input}
        />
      </div>

      <button style={button}>
        Submit Challenge
      </button>
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
};

const input = {
  width: "100%",
  height: "150px",
  borderRadius: "12px",
  padding: "14px",
};

const button = {
  marginTop: "20px",
  background: "#7C3AED",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "10px",
};

export default Coding;