import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Service from "../../pages/Service";
import Navbar from "../../Component/Navbar/Navbar";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Service" element={<Service />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
