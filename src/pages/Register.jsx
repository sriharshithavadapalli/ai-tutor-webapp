import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {

const [password,setPassword]=useState("");

const [confirmPassword,setConfirmPassword]=useState("");

const [error,setError]=useState("");

const handleRegister=()=>{

if(password!==confirmPassword){

setError("Passwords do not match");

return;

}

setError("");

alert("Account created successfully");

};
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "430px",
          background: "#0F1B33",
          padding: "42px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,.08)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: "800",
            color: "white",
            marginBottom: "34px",
            letterSpacing: "-1px"
          }}
        >

          AI Tutor

        </h1>

        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        <input
type="password"
placeholder="Create Password"
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
style={inputStyle}
/>

        <input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>
setConfirmPassword(e.target.value)
}
style={inputStyle}
/>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px"
          }}
        >

          <input type="checkbox" />

          <span
style={{
fontSize:"14px",
color:"#A5B4D4"
}}>

<span
style={{
fontSize:"14px",
color:"#A5B4D4"
}}>

I agree to{" "}

<Link
to="/terms"

style={{
color:"#8EA7D8",
textDecoration:"underline",
fontWeight:"600",
cursor:"pointer",
transition:"0.3s"
}}

onMouseEnter={(e)=>
e.target.style.color="#AFC3FF"
}

onMouseLeave={(e)=>
e.target.style.color="#8EA7D8"
}

>

Terms & Conditions

</Link>

</span>

</span>
        </div>
{
error && (

<p
style={{
color:"#ff6b6b",
fontSize:"14px",
marginBottom:"16px"
}}
>

{error}

</p>

)
}
        <button

onClick={handleRegister}

style={{
width:"100%",
padding:"14px",
background:"#7C3AED",
color:"white",
border:"none",
borderRadius:"12px",
fontSize:"16px",
cursor:"pointer"
}}

>

Register

</button>
<div
style={{
marginTop:"22px",
textAlign:"center"
}}>

<span
style={{
color:"#A5B4D4",
fontSize:"14px"
}}>

Already have an account?

</span>

<Link
to="/login"

style={{
display:"block",
marginTop:"12px",
textDecoration:"none"
}}>

<Link
to="/login">

<button
style={{
width:"100%",
padding:"14px",
background:"transparent",
color:"#8EA7D8",
border:"1px solid #8EA7D8",
borderRadius:"12px",
cursor:"pointer"
}}>

Login

</button>

</Link>

</Link>

</div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,.08)",
  background: "#16233F",
  color: "white",
  fontSize: "15px",
  boxSizing: "border-box"
};

export default Register;