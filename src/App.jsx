import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

export default function App() {
  return (
    <Router>
      <main>
        {/* These background elements will be on every page */}
        <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img"/>
        <div className="h-0w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
        
        {/* The Header is outside Routes, so it shows on every page */}
        <Header />
        
        {/* The Routes block switches between your pages */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </main>
    </Router>
  );
}