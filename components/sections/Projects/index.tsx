import Section from '@/components/Section';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    delay: 100,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });
  return (
    <Section id="projects" inView={inView} intro="take a look at my" title="Projects" ref={ref}>
      {inView && (
        <article className="grid grid-cols-1 gap-8 rounded-3xl md:bg-white md:p-4 dark:md:bg-slate-800 lg:p-12">
          <ProjectItem
            name="FazzDoc - Telehealth Application"
            technologies={['React', 'ReactNative', 'GraphQL', 'NestJS', 'TypeScript', 'PostgreSQL']}
            features={[
              'Search and return doctors, medical facility and specialties matching the keywords',
              'User books an appointment with a doctor',
              'User can cancel a booking as long as it is not Completed or Cancelled',
            ]}
          />
          <ProjectItem
            name="MBAges - Insurance company website"
            technologies={['GraphQL', 'NextJS', 'NestJS', 'SEO', 'TypeScript']}
            features={[
              'Design a new website interface according to modern trends, support SEO-Marketing',
              'Integrate electronic payment gateway to allow users to pay online',
              'Develop tools to analyze costs and insurance package routes according to logic from customers',
            ]}
          />
          <ProjectItem
            name="Headless storefront - E-commerce website"
            technologies={['GraphQL', 'NextJS', 'Go', 'SEO', 'TypeScript', 'Shopify']}
            features={[
              'Develop monorepo components for e-commerce website with React',
              'Drag and drop components to build a storefront',
              'Optimize the performance of the website',
            ]}
          />
        </article>
      )}
    </Section>
  );
};

export default Projects;
