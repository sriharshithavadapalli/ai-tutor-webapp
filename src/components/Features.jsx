function Features() {

const features = [

{
title:"Adaptive Quizzes",
desc:"Personalized quizzes that adapt to student performance."
},

{
title:"AI Powered Assistance",
desc:"Get instant explanations and tutoring support."
},

{
title:"24/7 Availability",
desc:"Learn anytime with uninterrupted AI access."
},

{
title:"Smart Recommendations",
desc:"Receive study suggestions based on progress."
}

];

return (

<section
className="
px-10
py-16">

<div
className="
max-w-6xl
mx-auto">

<div
className="
grid
grid-cols-4
gap-6">

{features.map((feature,index)=>(

<div
key={index}

className="
bg-[#0f172a]
border
border-white/10
rounded-2xl

'h-40'

px-6

flex
flex-col
justify-center
items-center

text-center">

<h3
className="
text-lg
font-semibold">

{feature.title}

</h3>

<p
className="
mt-3
text-sm
text-gray-400">

{feature.desc}

</p>

</div>

))}

</div>

</div>

</section>

);

}

export default Features;