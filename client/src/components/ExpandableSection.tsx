import React, { useState, ReactNode } from 'react';

interface ExpandableSectionProps {
  title: string;
  dates: string;
  children: ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  dates,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between p-4 pr-0 bg-custom1 mr-4 lg:mr-0'>
        <h2 className='text-custom5 text-sm'>{title}</h2>
        <button onClick={handleClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`transform transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#a6e1fa'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </button>
      </div>
      {expanded && (
        <div
          className='ml-4 p-4 bg-custom2 text-custom5 rounded transition duration-500 ease-in-out overflow-hidden mr-4 lg:mr-0'
          style={{ maxHeight: expanded ? '100%' : '0' }}
        >
          <p className='mb-4 text-sm'> {dates}</p>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;
