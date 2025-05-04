import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Academics from "./pages/Academics/Academics";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academic" element={<Academics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
