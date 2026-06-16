import {
Routes,
Route
} from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Login from "./pages/Login";

function App() {

return (

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/register"
element={<Register />}
/>

<Route
path="/terms"
element={<Terms />}
/>

<Route
path="/login"
element={<Login/>}
/>

</Routes>

);

}

export default App;