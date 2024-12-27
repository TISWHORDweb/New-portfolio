import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: '2024',
    company: 'RYD Learning',
    role: 'Full stack engineer',
    description: 'Build different web app that manage parent, teacher, partner and adminis to transform learning into an exhilarating journey of discovery.',
  },
  {
    period: '2024',
    company: 'Xolani Bridge',
    role: 'Full stack engineer',
    description: 'Xolani Bridge is a proprietary imaging and teleradiology solution designed to integrate seamlessly into clinical workflows.',
  },
  {
    period: '2024',
    company: 'Light Reach',
    role: 'Full stack engineer',
    description: 'Light Reach helps with product development and engineering expertise for startups, solving critical challenges and transforming ideas into products.',
  },
  {
    period: '2023',
    company: 'Cloud Equipment',
    role: 'Backend & Frontend developer',
    description: 'Developed APIs and frontend interfaces for a Healthtech company providing medical equipment across Africa.',
  },
  {
    period: '2023',
    company: 'Mongoro',
    role: 'Senior backend developer',
    description: 'Led backend development for a fintech company, implementing payment systems and transaction management.',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-indigo-600 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0">
                <div className="w-4 h-4 rounded-full bg-indigo-600">
                  <Briefcase className="w-8 h-8 absolute -left-2 -top-2 text-indigo-400" />
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 ml-6">
                <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm mb-2">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                <h4 className="text-indigo-400 mb-3">{exp.role}</h4>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}