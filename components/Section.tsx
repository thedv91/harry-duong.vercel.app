type Props = {
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
};
const Section: React.FC<Props> = ({ id, title, intro, children }) => {
  return (
    <section className="py-20" id={id}>
      <div className="flex items-center">
        <span className="mr-8 h-[1px] w-14 bg-slate-700 dark:bg-gray-300"></span>
        <span className="text-xs uppercase text-gray-500 dark:text-gray-200">{intro}</span>
      </div>
      <h2 className="mt-2 mb-8 text-2xl uppercase">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
