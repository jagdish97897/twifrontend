import  Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
