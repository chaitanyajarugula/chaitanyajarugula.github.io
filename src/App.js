import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import PastWork from './Components/PastWork';

function App() {
    return (
      <main className="bg-dark-900 text-gray-300 min-h-screen relative">
        {/* Background effects */}
        <div className="bg-grid-overlay" />
        <div className="scanline" />

        {/* Content */}
        <Nav />
        <About />
        <PastWork />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    );
}

export default App;
