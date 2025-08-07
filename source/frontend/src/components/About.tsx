import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import profileImg from '../assets/aboutme/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <span className="font-bold text-black dark:text-white">DevOps Engineer</span> with
                <span className="font-bold text-black dark:text-white"> 3+ years of experience</span> designing and implementing
                solutions for scalable, and highly available cloud-native applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Specialized in DevOps culture <span className="font-bold text-black dark:text-white">serverless</span> and <span className="font-bold text-black dark:text-white">containerized</span>
                architectures on AWS, with deep expertise in <span className="font-bold text-black dark:text-white">CI/CD pipelines</span>, <span className="font-bold text-black dark:text-white">Docker</span>,
                <span className="font-bold text-black dark:text-white"> AWS</span>, <span className="font-bold text-black dark:text-white">Python</span>, <span className="font-bold text-black dark:text-white">Kubernetes</span>,
                <span className="font-bold text-black dark:text-white"> Bash</span>, <span className="font-bold text-black dark:text-white">Terraform</span>, <span className="font-bold text-black dark:text-white">Bamboo</span>,
                and <span className="font-bold text-black dark:text-white">Splunk</span>.
              </p>

              <a
                href="/GorkaZabarte.pdf"
                download
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors duration-300"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={profileImg}
                  alt="Gorka Zabarte"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
