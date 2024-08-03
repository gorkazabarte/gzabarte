import { motion } from 'framer-motion';

import Ansible from '../assets/skills/ansible.svg';
import AWS from '../assets/skills/aws.svg';
import Docker from '../assets/skills/docker.svg';
import EKS from '../assets/skills/eks.svg';
import Helm from '../assets/skills/helm.svg';
import Jenkins from '../assets/skills/jenkins.svg';
import Kubernetes from '../assets/skills/kubernetes.svg';
import Kustomize from '../assets/skills/kubernetes.svg';
import Linux from '../assets/skills/linux.svg';
import Python from '../assets/skills/python.svg';
import SQL from '../assets/skills/sql.svg';
import Terraform from '../assets/skills/terraform.svg';

const skills = [
  { name: 'Ansible', logo: Ansible },
  { name: 'AWS', logo: AWS },
  { name: 'Docker', logo: Docker },
  { name: 'EKS', logo: EKS },
  { name: 'Helm', logo: Helm },
  { name: 'Jenkins', logo: Jenkins },
  { name: 'Kubernetes', logo: Kubernetes },
  { name: 'Kustomize', logo: Kustomize },
  { name: 'Linux', logo: Linux },
  { name: 'Python', logo: Python },
  { name: 'SQL', logo: SQL },
  { name: 'Terraform', logo: Terraform }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center cursor-pointer"
              >
                {skill.logo && (
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;