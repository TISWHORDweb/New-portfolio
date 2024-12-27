import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Server } from 'lucide-react';
import Me from '../images/banner101.png';


export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={Me}
              alt="Profile"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer & UI/UX Designer
            </h3>
            <p className="text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with expertise in both front-end and back-end development. 
              With over 5 years of experience, I specialize in creating responsive, user-friendly applications 
              that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg">
                <Layout className="w-10 h-10 text-indigo-500 mb-3" />
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-gray-400">
                  Creating beautiful, responsive user interfaces
                </p>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg">
                <Server className="w-10 h-10 text-indigo-500 mb-3" />
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-sm text-gray-400">
                  Building robust server-side applications
                </p>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg">
                <Code2 className="w-10 h-10 text-indigo-500 mb-3" />
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm text-gray-400">
                  Writing maintainable, efficient code
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}