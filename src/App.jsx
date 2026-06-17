import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Learn from "./pages/Learn";
import Terms from "./pages/Terms";
import Introduction from "./pages/Introduction";
import KeyConcepts from "./pages/KeyConcepts";
import Examples from "./pages/Examples";
import InteractiveQuestions from "./pages/InteractiveQuestions";
import Summary from "./pages/Summary";

import Simple from "./pages/Simple";
import Medium from "./pages/Medium";
import Advanced from "./pages/Advanced";

import Quiz from "./pages/Quiz";
import Coding from "./pages/Coding";

function App() {

return (

<Routes>

<Route path="/" element={<Home />} />

<Route path="/register" element={<Register />} />

<Route path="/login" element={<Login />} />

<Route path="/learn" element={<Learn />} />

<Route path="/terms" element={<Terms />} />
<Route path="/introduction" element={<Introduction/>}/>

<Route path="/keyconcepts" element={<KeyConcepts/>}/>

<Route path="/examples" element={<Examples/>}/>

<Route path="/questions" element={<InteractiveQuestions/>}/>

<Route path="/summary" element={<Summary/>}/>

<Route path="/simple" element={<Simple/>}/>

<Route path="/medium" element={<Medium/>}/>

<Route path="/advanced" element={<Advanced/>}/>

<Route path="/quiz" element={<Quiz/>}/>

<Route path="/coding" element={<Coding/>}/>

</Routes>

);

}

export default App;