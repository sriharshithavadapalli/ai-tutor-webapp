import { FaRobot } from "react-icons/fa";
function Hero() {
return(

<section
className="
text-center
mt-24">

<div
className="
flex
justify-center">

<div
className="
w-28
h-28

rounded-full

'bg-gradient-to-br'
from-violet-600
to-blue-600

flex
items-center
justify-center">

<FaRobot
className="
text-5xl"/>

</div>

</div>

<h1
className="
mt-8
text-5xl
font-bold
whitespace-nowrap">

Learn Smarter with AI

</h1>

<p
className="
mt-5
text-gray-400">

AI powered tutoring platform

</p>

</section>

);

}

export default Hero;