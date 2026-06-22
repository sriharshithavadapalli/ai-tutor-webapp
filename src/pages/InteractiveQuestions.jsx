function InteractiveQuestions() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >

      <h1 style={heading}>
        Interactive Questions
      </h1>

      <p style={subtitle}>
        Think, reflect, and strengthen understanding.
      </p>


      <div style={container}>

        <div style={card}>
          <p style={question}>
            How can AI improve learning experiences for students?
          </p>
        </div>


        <div style={card}>
          <p style={question}>
            Why is structured learning important while studying a new topic?
          </p>
        </div>


        <div style={card}>
          <p style={question}>
            How would you explain a difficult concept to someone in simple words?
          </p>
        </div>

      </div>

    </div>
  );
}

const heading = {
  fontSize: "36px",
  fontWeight: "800",
  marginBottom: "10px",
};

const subtitle = {
  color: "#8EA7D8",
  marginBottom: "30px",
};

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const card = {
  background: "#0F1B33",
  padding: "28px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,.08)",
};

const question = {
  color: "#D8E3FF",
  fontSize: "18px",
  lineHeight: "1.8",
};

export default InteractiveQuestions;