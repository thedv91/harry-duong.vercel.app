import Section from '../Section';

const About: React.VFC = () => {
  return (
    <Section id="info" intro="some info" title="About me">
      <article className="rounded-3xl bg-white p-12 dark:bg-slate-800">
        <p className="font-semibold">
          {`I'm a front-end web developer with a background in computer systems and network infrastructure. My 8 years
    of IT experience has given me a strong foundation for web development and building complex solutions.
    Recently, I graduated from the`}{' '}
          <span className="text-primary dark:text-sky-400">Juno College Immersive Web Development Bootcamp</span>. I am
          passionate about coding and solving problems through code, and I am excited to work alongside other amazing
          programmers and learn so much more!
        </p>
      </article>
    </Section>
  );
};

export default About;
