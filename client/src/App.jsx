import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Service from "./pages/Service.jsx";
import Logout from "./pages/Logout.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/services" element={ <Service/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/logout" element={ <Logout/> } />
        <Route path="*" element={ <Error/> } />

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;