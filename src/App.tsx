import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <Navbar />
      
      <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </motion.div>
      </div>

      <footer className="bg-gray-900 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/TISWHORDweb" className="hover:text-indigo-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/batimehin-emmanuel-95b466222" className="hover:text-indigo-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/Tiswhord13" className="hover:text-indigo-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="mailto:ebatimehin@gmail.com" className="hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            Abuja FCT, Nigeria
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            +234 8120 9630 57
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            ebatimehin@gmail.com
          </div>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Emmanuel Batimehin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;