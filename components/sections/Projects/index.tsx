import Section from '@/components/Section';
import ProjectItem from './ProjectItem';

const Projects: React.VFC = () => {
  return (
    <Section id="projects" intro="take a look at my" title="Projects">
      <article className="rounded-3xl dark:bg-slate-800 md:bg-white md:p-12">
        <ProjectItem
          name="Sayang"
          technologies={['React', 'GraphQL', 'gRPC', 'Go']}
          features={[
            'Completely built with hooks and functional components',
            'Emulates time passage, and stock prices update randomly as each "day" passes',
            'Real-time updates on stock and portfolio performance, visualized with interactive charts',
          ]}
        />
      </article>
    </Section>
  );
};

export default Projects;
