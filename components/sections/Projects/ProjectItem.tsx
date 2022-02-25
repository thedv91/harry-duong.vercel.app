import { Fragment } from 'react';

type Props = {
  image?: string;
  name: string;
  technologies?: string[];
  features?: string[];
};
const ProjectItem: React.VFC<Props> = ({ name, technologies, features }) => {
  return (
    <div className="rounded-lg border p-8 shadow-2xl">
      <h3 className="text-xl font-semibold">{name}</h3>
      <h4 className="break-words font-semibold">
        Technologies Used:{' '}
        {technologies?.map((value, index) => (
          <Fragment key={index}>
            {index !== 0 && <span>,</span>}
            <span className="ml-2 text-primary dark:text-sky-400">{value}</span>
          </Fragment>
        ))}
      </h4>
      <ul className="ml-5 mt-2 list-disc">
        {features?.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
