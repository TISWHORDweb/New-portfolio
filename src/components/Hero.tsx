import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Me from '../images/me.png';
import Resume from '../files/my resume - 2024-11-11 12_18_30.pdf';


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Emmanuel Batimehin
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Full-Stack Web Developer</h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Passionate about creating exceptional web experiences with a focus on clean code and user-centered design.
            Let's build something amazing together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Hire Me
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={Resume}
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-600 hover:border-indigo-500 transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-80 h-  mx-auto overflow-hidden ">
            <img
              src={Me}
              alt="Emmanuel Batimehin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}