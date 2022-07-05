import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Section from '../Section';

const ContactContent = dynamic(() => import('./ContactContent'));

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    delay: 100,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  return (
    <Section ref={ref} inView={inView} id="contact" intro="Say hello" title="Contact">
      {inView && <ContactContent />}
    </Section>
  );
};

export default Contact;
