type Props = {
  name: string;
  children: React.ReactNode;
};
const SkillItem: React.FC<Props> = ({ name, children }) => {
  return (
    <div className="flex h-24 w-full min-w-24 cursor-pointer select-none flex-col items-center justify-center rounded-lg border p-2.5 shadow-md dark:bg-slate-600">
      {children}
      <p className="mt-2.5 text-sm">{name}</p>
    </div>
  );
};

export default SkillItem;
