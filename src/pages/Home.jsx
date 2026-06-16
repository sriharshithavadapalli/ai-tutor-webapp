import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {

return (

<div>

<Navbar />

<div
style={{
textAlign:"center",
marginTop:"100px"
}}>

<h1
style={{
fontSize:"64px",
fontWeight:"900",
lineHeight:"1.1",
letterSpacing:"-2px",
color:"white",
marginBottom:"18px"
}}>

Learn Smarter with AI

</h1>

<p
style={{
fontSize:"19px",
fontWeight:"400",
color:"#8EA7D8",
letterSpacing:"0.4px",
fontFamily:"Inter, sans-serif",
marginTop:"14px"
}}>

AI powered tutoring platform

</p>
</div>

<Features />

<Footer />

</div>

);

}

export default Home;