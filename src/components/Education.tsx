import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    year: '2023',
    degree: 'BSC Computer Science',
    score: '95%',
  },
  {
    year: '2021',
    degree: 'Full Stack Web Developer',
    score: '97%',
  },
  {
    year: '2019',
    degree: 'Pre-university JUPEB (IELTS)',
    score: '91%',
  },
  {
    year: '2017',
    degree: 'SSCE',
    score: '95%',
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
              
              <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm mb-3">
                {edu.year}
              </span>
              
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              
              <div className="text-indigo-400 font-semibold">
                Score: {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}