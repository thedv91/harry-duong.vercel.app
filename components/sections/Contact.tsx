import { Calendar, Mail } from 'react-feather';
import Section from '../Section';

type InputProps = JSX.IntrinsicElements['input'];

const Input: React.VFC<InputProps> = (props) => {
  return <input {...props} className="w-full border px-4 py-4" />;
};

const Contact: React.VFC = () => {
  return (
    <Section id="contact" intro="Say hello" title="Contact">
      <article className="rounded-3xl dark:bg-slate-800 md:bg-white md:p-12">
        <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-2xl border p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-green-100 bg-opacity-80">
              <Mail className="text-green-700" />
            </div>
            <a className="my-2" href="mailto:thedv91@gmail.com">
              thedv91@gmail.com
            </a>
            <p className="text-sm">Email Me</p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-100 bg-opacity-80">
              <Calendar className="text-blue-700" />
            </div>
            <a className="my-2" href="mailto:thedv91@gmail.com">
              GoogleCalendar
            </a>
            <p className="text-sm">Schedule a Meeting</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Contact Form</h3>
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="grid gap-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <Input required tabIndex={1} placeholder="Your Name*" />
                <Input type="email" required tabIndex={2} placeholder="Your Email*" />
              </div>
              <Input required tabIndex={3} placeholder="Subject*" />
              <textarea required tabIndex={4} placeholder="Your Message*" className="w-full border px-4 py-4" />
            </div>

            <button
              tabIndex={5}
              type="submit"
              className="dark:highlight-white/20 mx-auto mt-10 flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition-all duration-100 ease-in-out hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 sm:w-auto"
            >
              SEND
            </button>
          </form>
        </div>
      </article>
    </Section>
  );
};

export default Contact;
