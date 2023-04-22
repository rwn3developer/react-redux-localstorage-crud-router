import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import View from "../pages/View";
import Contact from "../pages/Contact";
import Add from "../pages/Add";
const Routing = () => {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/view" element={<View/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                        <Route path="/add" element={<Add/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
}

export default Routing;