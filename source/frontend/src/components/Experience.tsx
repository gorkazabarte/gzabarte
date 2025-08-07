import { motion } from 'framer-motion';
import align from '../assets/experience/align.png';
import tws from '../assets/experience/tws.png';

const experiences = [
  {
    title: 'DevOps Engineer',
    company: 'Align Technology',
    period: '2022 - Present',
    logo: align,
    bullets: [
        'Followed DevOps best practices, including collaboration with developers, automated CI/CD pipelines, and blue/green deployments, and more.',
        'Collaborated with cross-functional teams to deliver highly available and scalable cloud-native solutions.',
        'Designed and implemented AWS serverless applications using Lambda, Step Functions, API Gateway, S3, DynamoDB, and EventBridge.',
        'Extensive hands-on experience with AWS services: Aurora, AppConfig, CloudFront, CloudWatch, ECR, EKS, RDS, Route53, and Systems Manager.',
        'Implemented CI/CD pipelines using Bamboo, Bash, Python, and Terraform, ensuring automated build, test, and deployment processes.',
        'Built event-driven architectures leveraging EventBridge for decoupled service communication.',
        'Managed infrastructure as code with Terraform and Terragrunt across multiple environments.',
        'Used CloudWatch for real-time application monitoring, custom metrics, and log alerts.',
        'Integrated Splunk to visualize logs, analyze errors, and monitor system health.',
    ]
  },
  {
    title: 'Python Software Developer',
    company: 'The Wise Seeker',
    period: '2020 - 2023',
    logo: tws,
    bullets: [
        'Developed and maintained Python backend services for RESTful and event-driven applications.',
        'Built automation scripts and microservices using Python',
        'Worked with popular Python frameworks like FastAPI to build scalable APIs.',
        'Integrated Python services with AWS services.',
        'Utilized boto3 for AWS SDK automation tasks.',
        'Created unit and integration tests using PyTest and unittest to ensure code reliability and test coverage.',
        'Collaborated in Agile teams using Git, JIRA, and code reviews to maintain high software quality.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-800 dark:border-gray-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-800 dark:bg-gray-300" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain rounded-lg p-1 ml-3"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sky-800 dark:text-g font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="ml-4">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 