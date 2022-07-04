import clsx from 'clsx';
import { forwardRef } from 'react';

type Props = {
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  inView?: boolean;
};
const Section = forwardRef<HTMLSelectElement, Props>(function InnerSection(
  { id, title, intro, children, inView },
  ref,
) {
  return (
    <section
      id={id}
      ref={ref}
      className={clsx('py-20 transition-opacity', {
        'content-visibility-hidden opacity-0': !inView,
        'content-visibility-visible opacity-100': inView,
      })}
    >
      <div className="flex items-center">
        <span className="mr-8 h-[1px] w-14 bg-slate-700 dark:bg-gray-300"></span>
        <span className="text-xs uppercase text-gray-500 dark:text-gray-200">{intro}</span>
      </div>
      <h2 className="mt-2 mb-8 text-2xl uppercase">{title}</h2>
      {children}
    </section>
  );
});

export default Section;
