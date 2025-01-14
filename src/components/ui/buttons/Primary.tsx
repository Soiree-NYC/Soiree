import { FC, } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label?: string;
  callback?: () => void;
  bold?: boolean;
  frosted?: boolean;
  link?: string;
  img?: string;
  size?: string;
};

const Primary: FC<Props> = ({ label, callback, bold, frosted, link, img, size }) => {
  return (
    <button
      onClick={callback}
      className={`border border-slate-300 hover:border-slate-50 rounded-lg px-2 py-1 ${size ? `text-${size}` : 'text-sm'} text-nowrap ${bold ? 'font-bold' : 'font-normal'} ${frosted ? 'bg-white text-slate-500' : 'bg-transparent text-slate-300'} text-slate-300 hover:text-slate-50 hover:font-bold`}>
        {label && label}
        {link &&
          <Link to={link}>
            <div className='flex justify-center p-0'>
              <img src={img} alt="" className='h-[5rem]' />
            </div>
          </Link>
        }
    </button>
  );
};

export default Primary;
