import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="font-poppins bg-gray-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />  
      <Contact />
      <footer className="text-center py-8 bg-[#2c3e50] text-white">
        <p>&copy; 2024 Muhammad Umar Draz . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
