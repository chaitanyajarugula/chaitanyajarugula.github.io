import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import PastWork from './Components/PastWork';

function App() {
    return (
      <main className="text-gray-400 bg-custom body-font">
        <Nav/>
        <About/>
        <PastWork />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    );
}

export default App;
