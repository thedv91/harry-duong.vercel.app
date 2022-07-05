import Section from '@/components/Section';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const SkillContent = dynamic(() => import('./SkillContent'));

const SkillSet: React.FC = () => {
  const { ref, inView } = useInView({
    delay: 100,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });
  return (
    <Section id="skill" inView={inView} intro="check out my" title="skills" ref={ref}>
      {inView && <SkillContent />}
    </Section>
  );
};

export default SkillSet;
