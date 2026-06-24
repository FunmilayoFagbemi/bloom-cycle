import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Perimenopause from "./pages/Perimenopause";
import Menopause from "./pages/Menopause";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import MyJourney from "./pages/MyJourney";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/perimenopause" element={<Perimenopause />} />
        <Route path="/menopause" element={<Menopause />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/my-journey" element={<MyJourney />} />
      </Routes>
    </Router>
  );
}

export default App;
