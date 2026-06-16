function Login() {
return (

<div
style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div
style={{
width:"430px",
background:"#0F1B33",
padding:"42px",
borderRadius:"24px",
border:"1px solid rgba(255,255,255,.08)"
}}>

<h1
style={{
textAlign:"center",
fontSize:"34px",
fontWeight:"800",
marginBottom:"34px"
}}>

AI Tutor

</h1>

<input
type="email"
placeholder="Email"

style={inputStyle}
/>

<input
type="password"
placeholder="Password"

style={inputStyle}
/>

<button
style={{
width:"100%",
padding:"14px",
background:"#7C3AED",
color:"white",
border:"none",
borderRadius:"12px",
fontSize:"16px",
cursor:"pointer"
}}>

Login

</button>

</div>

</div>

);

}

const inputStyle={

width:"100%",
padding:"14px",

marginBottom:"18px",

background:"#16233F",

color:"white",

border:"1px solid rgba(255,255,255,.08)",

borderRadius:"12px",

boxSizing:"border-box"

};

export default Login;