import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Submitting...');
    
    // Google Form action URL (update with your own form action URL)
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScc_FKKkowhoUC_3cHAK5tM2K20CHmnFZwg0KidxaeepaEZHg/formResponse';
    
    // Create FormData to send to Google Forms
    const formPayload = new FormData();
    formPayload.append('entry.1335158190', formData.name); // entry.123456 is the form field ID for Name
    formPayload.append('entry.1855670946', formData.email); // entry.789101 is the form field ID for Email
    formPayload.append('entry.730958248', formData.message); // entry.112233 is the form field ID for Message

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors', // Google Forms does not allow CORS, use no-cors mode
      });

      if (response.ok || response.type === 'opaque') {
        setSubmissionStatus('Message sent successfully!');
      } else {
        setSubmissionStatus('Failed to send message. Try again later.');
      }
    } catch (error) {
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 bg-gray-800 rounded-lg"
          >
            <MapPin className="w-10 h-10 mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-400">Abuja FCT, Nigeria</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 bg-gray-800 rounded-lg"
          >
            <Mail className="w-10 h-10 mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <a href="mailto:ebatimehin@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
              ebatimehin@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 bg-gray-800 rounded-lg"
          >
            <Phone className="w-10 h-10 mx-auto mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <a href="tel:+2348120963057" className="text-gray-400 hover:text-indigo-400 transition-colors">
              +234 8120 9630 57
            </a>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submissionStatus && (
            <p className="mt-4 text-center text-gray-400">{submissionStatus}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
