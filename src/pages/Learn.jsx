import { useState } from "react";

function Learn() {

const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");

const handleAsk = () => {
if (!question.trim()) return;

setAnswer(
"AI Tutor Response: This is a sample answer. Later we will connect real AI API."
);
};

return (

<div
style={{
minHeight: "100vh",
padding: "60px",
color: "white"
}}>

{/* TOP SECTION */}

<div
style={{
textAlign: "center",
marginBottom: "60px"
}}>

<h1
style={{
fontSize: "36px",
fontWeight: "800",
marginBottom: "10px"
}}>

What do you want to learn today?

</h1>

<p
style={{
color: "#8EA7D8",
marginBottom: "30px",
fontSize: "16px"
}}>

Ask anything like “Explain photosynthesis” or “Teach me Python loops”

</p>

<textarea
placeholder="Example: Explain photosynthesis or Teach me Python loops"
value={question}
onChange={(e) => setQuestion(e.target.value)}

style={{
width: "100%",
maxWidth: "750px",
height: "120px",
padding: "18px",
borderRadius: "16px",
background: "#0F1B33",
color: "white",
border: "1px solid rgba(255,255,255,.08)",
resize: "none",
fontSize: "15px"
}}
/>

<div style={{ marginTop: "20px" }}>

<button
onClick={handleAsk}

style={{
padding: "14px 28px",
background: "#7C3AED",
border: "none",
borderRadius: "12px",
color: "white",
fontWeight: "600",
cursor: "pointer",
fontSize: "16px"
}}>

Start Learning

</button>

</div>

</div>

{/* ANSWER */}

{answer && (

<div
style={{
maxWidth: "750px",
margin: "0 auto",
marginBottom: "50px",
padding: "20px",
background: "#0F1B33",
borderRadius: "16px",
border: "1px solid rgba(255,255,255,.08)",
color: "#A5B4D4"
}}>

{answer}

</div>

)}

{/* COURSES */}

<div style={{ marginTop: "60px" }}>

<h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
Recommended Courses
</h2>

<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

<div style={card}>JavaScript Basics</div>
<div style={card}>React Development</div>
<div style={card}>Python for AI</div>
<div style={card}>Data Structures</div>

</div>

</div>

{/* SUBJECTS */}

<div style={{ marginTop: "50px" }}>

<h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
Related Subjects
</h2>

<div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

<div style={card}>Mathematics</div>
<div style={card}>Machine Learning</div>
<div style={card}>Computer Science</div>
<div style={card}>Problem Solving</div>

</div>

</div>

</div>

);

}

const card = {
padding: "15px 20px",
background: "#0F1B33",
border: "1px solid rgba(255,255,255,.08)",
borderRadius: "14px",
color: "#8EA7D8",
cursor: "pointer"
};

export default Learn;