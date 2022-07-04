import Section from '../Section';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    delay: 100,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });
  return (
    <Section ref={ref} inView={inView} id="info" intro="some info" title="About me">
      {inView && (
        <article className="rounded-3xl md:bg-white md:p-12 dark:md:bg-slate-800">
          <p className="font-semibold">
            {`I'm a Full-stack developer with a background in computer systems and network infrastructure. My 8 years
    of IT experience has given me a strong foundation for web development and building complex solutions.
    Recently, I graduated from the`}{' '}
            <a
              href="https://www.freecodecamp.org/certification/thedv91/front-end-development-libraries"
              title="Free Code Camp"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-sky-400"
            >
              freeCodeCamp
            </a>
            . I am passionate about coding and solving problems through code, and I am excited to work alongside other
            amazing programmers and learn so much more!
          </p>
        </article>
      )}
    </Section>
  );
};

export default About;
