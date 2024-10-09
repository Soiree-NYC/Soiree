import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[]
};

const Feed: FC<Props> = ({ children }) => {
  return (
    <div className='border rounded-lg shadow-md flex justify-center items-center gap-1 p-4 grid grid-cols-5 fit-content'>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
};

export default Feed;