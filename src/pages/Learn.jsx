import { useState } from "react";
import { Link } from "react-router-dom";

function Learn() {
  const [question, setQuestion] = useState("");
  const [filtered, setFiltered] = useState([]);

const suggestions = [

"Python Basics",
"Python Loops",
"Python Functions",
"Java Programming",

"Mathematics",

"Science",

"Web Development",

"Data Structures",

"Interview Preparation",

"AI Fundamentals",

"React Development",

"English Grammar",

"Aptitude",

"Competitive Exams"

];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        color: "white",
      }}
    >
      {/* TOP */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1 style={title}>
          What do you want to learn today?
        </h1>

        <p style={subtitle}>
          Ask anything and get AI-powered learning
        </p>

        <textarea
  value={question}
  onChange={(e) => {
    setQuestion(e.target.value);

    e.target.style.height = "120px";
    e.target.style.height =
      e.target.scrollHeight + "px";
  }}

  placeholder="Ask AI Tutor..."

  style={textarea}
/>

        <div style={{ marginTop: "20px" }}>
          <Link to="/answer">
            <button style={button}>
              Start Learning
            </button>
          </Link>
        </div>
      </div>

      {/* CATEGORIES */}

      <h2 style={sectionTitle}>
        Learning Categories
      </h2>

      <div style={grid}>
        <div style={card}>
          <h3>Subjects</h3>

          <div style={list}>
            <Link style={link} to="/learn/math">
              Mathematics
            </Link>

            <Link style={link} to="/learn/science">
              Science
            </Link>

            <Link style={link} to="/learn/social">
              Social
            </Link>

            <Link style={link} to="/learn/english">
              English
            </Link>

            <Link style={link} to="/learn/gk">
              General Knowledge
            </Link>
          </div>
        </div>

        <div style={card}>
          <h3>Technology</h3>

          <div style={list}>
            <Link style={link} to="/learn/aiml">
              AIML
            </Link>

            <Link style={link} to="/learn/computer">
              Computer Technologies
            </Link>

            <Link style={link} to="/learn/web">
              Web Development
            </Link>

            <Link style={link} to="/learn/coding">
              Coding
            </Link>
          </div>
        </div>

        <div style={card}>
          <h3>Others</h3>

          <div style={list}>
            <Link style={link} to="/learn/communication">
              Communication
            </Link>

            <Link style={link} to="/learn/grammar">
              English Grammar
            </Link>

            <Link style={link} to="/learn/softskills">
              Soft Skills
            </Link>

            <Link style={link} to="/learn/aptitude">
              Aptitude
            </Link>

            <Link style={link} to="/learn/interview">
              Interview Prep
            </Link>

            <Link style={link} to="/learn/exams">
              Competitive Exams
            </Link>
          </div>
        </div>
      </div>

      {/* LEARNING PATH */}

      <div style={{ marginTop: "80px" }}>
        <h2 style={sectionTitle}>
          AI Learning Path
        </h2>

        <div style={box}>

          <Link style={path} to="/introduction">
            Introduction
          </Link>

          <Link style={path} to="/keyconcepts">
            Key Concepts
          </Link>

          <Link style={path} to="/examples">
            Examples
          </Link>

          <Link style={path} to="/questions">
            Interactive Questions
          </Link>

          <Link style={path} to="/summary">
            Summary
          </Link>

        </div>
      </div>

      {/* TUTOR + PRACTICE */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "70px",
        }}
      >

        <div>

          <h2 style={sectionTitle}>
            AI Tutor Assistant
          </h2>

          <div style={box}>

            <input
              placeholder="Ask AI Tutor..."
              style={input}
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "18px",
              }}
            >

              <Link to="/simple">
                <button style={button}>
                  Simple
                </button>
              </Link>

              <Link to="/medium">
                <button style={button}>
                  Medium
                </button>
              </Link>

              <Link to="/advanced">
                <button style={button}>
                  Advanced
                </button>
              </Link>

            </div>

          </div>

        </div>


        <div>

          <h2 style={sectionTitle}>
            Practice Zone
          </h2>

          <div style={box}>

            <Link
style={{
textDecoration:"none"
}}
to="/quiz"
>

<div style={practice}>
MCQ Quiz
</div>

</Link>


<Link
style={{
textDecoration:"none"
}}
to="/coding"
>

<div style={practice}>
Coding Challenges
</div>

</Link>

          </div>

        </div>

      </div>

    </div>
  );
}

const title = {
  fontSize: "38px",
  fontWeight: "800",
};

const subtitle = {
  color: "#8EA7D8",
};

const textarea = {
  width: "100%",
  maxWidth: "760px",

  minHeight: "120px",

  maxHeight: "320px",

  overflowY: "auto",

  resize: "none",

  padding: "18px",

  marginTop: "20px",

  background: "#0F1B33",

  color: "white",

  borderRadius: "16px",

  border: "1px solid rgba(255,255,255,.08)",

  fontSize: "16px",

  lineHeight: "1.8",

  outline: "none"
};

const sectionTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
};

const card = {
  background: "#0F1B33",

  padding: "24px",

  borderRadius: "18px",

  border: "1px solid rgba(255,255,255,.08)",

  boxShadow: "0 10px 24px rgba(0,0,0,.18)"
};

const list = {
  display: "flex",

  flexDirection: "column",

  gap: "14px",

  marginTop: "18px"
};

const link = {

display:"block",

background:"#16233F",

padding:"14px",

borderRadius:"12px",

color:"#8EA7D8",

textDecoration:"none",

transition:"0.3s"

};

const box = {
  background: "#0F1B33",
  padding: "22px",
  borderRadius: "16px",
};

const path = {
  display: "block",
  marginBottom: "12px",
  background: "#16233F",
  padding: "14px",
  borderRadius: "10px",
  color: "#8EA7D8",
  textDecoration: "none",
};

const button = {
  padding: "10px 18px",
  background: "#7C3AED",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
};

const practice = {

padding:"12px 18px",

background:
"linear-gradient(135deg,#7C3AED,#9333EA)",

borderRadius:"12px",

color:"white",

marginBottom:"14px",

fontWeight:"600",

cursor:"pointer"

};


export default Learn;