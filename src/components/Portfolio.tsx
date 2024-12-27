import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import mongoroImg from '../images/chrome-capture-2023-4-22 (7).png';
import xolaniBridgeImg from '../images/chrome-capture-2024-6-20.png';
import rydLearningImg from '../images/chrome-capture-2024-12-27.png';
import cloudEquipmentImg from '../images/chrome-capture-2024-1-4 (1).png';
import aiPathfinderImg from '../images/chrome-capture-2024-1-4 (3).png';
import visaCompanionAIImg from '../images/chrome-capture-2024-1-4 (2).png';
import lightReachImg from '../images/chrome-capture-2024-6-20 (3).png';
import agricultureImg from '../images/chrome-capture-2024-12-27 (1).png';
import medCompanionImg from '../images/chrome-capture-2024-6-20 (1).png';
import digitizedAnalyticsImg from '../images/chrome-capture-2024-6-20 (2).png';
import bitsBytesImg from '../images/chrome-capture-2024-6-5 (1).png';
import mindcastsImg from '../images/chrome-capture-2023-6-25.png';
import zwiltImg from '../images/chrome-capture-2024-6-5.png';
import uxWedesignImg from '../images/chrome-capture-2023-4-22 (6).png';
import devsyncImg from '../images/chrome-capture-2024-3-7.png';
import kongaImg from '../images/chrome-capture-2023-4-22 (2).png';


const projects = [
  {
    title: 'Xolani Bridge',
    description: 'The platform offers a range of benefits that enhance collaboration, streamline workflows, and improve patient care. ',
    image: xolaniBridgeImg,
    link: 'https://xolanibridge.com/',
  },
  {
    title: 'Mongoro',
    description: 'A microfinance banking and simple payments for Africa markets.',
    image: mongoroImg,
    link: 'https://mongoro.com',
  },
  {
    title: 'RYD Learning',
    description: 'Our mission is to transform learning into an exhilarating journey of discovery.',
    image: rydLearningImg,
    link: 'https://rydlearning.com/',
  },
  {
    title: 'Cloud Equipment',
    description: 'Built the endpoints that manage the doctors and patient.',
    image: cloudEquipmentImg,
    link: 'https://cloudequipment.io/',
  },
  {
    title: 'AI Pathfinder',
    description: 'AI Pathfinder leads the charge in AI innovation, providing exceptional experiences and unmatched expertise',
    image: aiPathfinderImg,
    link: 'https://aipathfinder.io/',
  },
  {
    title: 'Visa Companion AI',
    description: 'The system was built to act as a companion for a client that needs a visa, a very nice looking application very responsive.',
    image: visaCompanionAIImg,
    link: 'https://visacompanion.ai/',
  },
  {
    title: 'Light Reach',
    description: 'The system is built to solve your most critical challenges, and turn your revolutionary idea into a transformational product.',
    image: lightReachImg,
    link: 'https://lightreach.io/',
  },
  {
    title: 'AgriCulture',
    description: 'Agriculture is a soil testing application that manages both the farmer and a soil tester agent.',
    image: agricultureImg,
    link: 'https://agricultur.surge.sh',
  },
  {
    title: 'MedCompanion',
    description: 'MedCompanion offers intelligent clinical verification support to clinicians for prescribing and dispensing medications.',
    image: medCompanionImg,
    link: 'https://medcompanion.surge.sh/',
  },
  {
    title: 'Digitized Analytics',
    description: 'Unlock the full potential of your data with Digitized Analytics. Our advanced analytics solutions empower you to make data-driven decisions with confidence.',
    image: digitizedAnalyticsImg,
    link: 'https://various-plate.surge.sh/',
  },
  {
    title: 'Bits & Bytes',
    description: 'Bits and Bytes" is a podcast dedicated to broadening opportunities in technology and AI.',
    image: bitsBytesImg,
    link: 'https://bits-bytes.surge.sh/',
  },
  {
    title: 'MINDCASTS',
    description: 'A podcast website. Discover practical tools and techniques to manage stress, anxiety, and depression, and cultivate a greater sense of mindfulness and resilience.',
    image: mindcastsImg,
    link: 'https://mindcast-web.netlify.app',
  },
  {
    title: 'Zwilt',
    description: 'Zwilt is a system that helps with a comprehensive screening process. We hand-pick highly skilled candidates so you can onboard them in a matter of days.',
    image: zwiltImg,
    link: 'https://zwilt-app.netlify.app/',
  },
  {
    title: 'UX Wedesign',
    description: 'Transform your online presence with our user-centered approach to UX design.',
    image: uxWedesignImg,
    link: 'https://uxwedesign.com/index.html',
  },
  {
    title: 'Devsync',
    description: 'A Blog website for all developers to meet and collaborate, share ideas, and help each other grow.',
    image: devsyncImg,
    link: 'https://devsync-beta.netlify.app/',
  },
  {
    title: 'Konga',
    description: 'A clone design E-commerce website of Konga.',
    image: kongaImg,
    link: 'https://papaya-biscotti-1a014e.netlify.app/',
  },
];


export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}