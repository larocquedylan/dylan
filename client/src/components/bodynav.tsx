import React, { useState } from 'react';

interface BodyNavProps {}

const BodyNav: React.FC<BodyNavProps> = ({}) => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div className='max-w-custom mx-auto '>
      <div className='sm:hidden relative mx-auto rounded sm:px-4'>
        <div className='absolute inset-0 m-auto mr-4 z-0 w-6 h-6 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-selector'
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
            <polyline points='8 9 12 5 16 9' />
            <polyline points='16 15 12 19 8 15' />
          </svg>
        </div>
        <select
          aria-label='Selected tab'
          className='form-select block w-full p-4  rounded text-custom5 appearance-none bg-transparent relative z-10  bg-custom1'
        >
          <option className='text-sm text-custom5'>Writing </option>
          <option className='text-sm text-custom5'>Builds </option>
          <option selected className='text-sm text-custom5'>
            Writing{' '}
          </option>
          <option className='text-sm text-custom5'>xyz </option>
          <option className='text-sm text-custom5'>abc </option>
        </select>
      </div>
      <div className='justify-between flex-wrap hidden sm:block bg-custom1 rounded shadow'>
        <div className='xl:w-full xl:mx-0 h-12'>
          <ul className='flex xs:px-0 px-4'>
            <li
              onClick={() => setActiveStatus(1)}
              className={
                activeStatus == 1
                  ? 'text-sm text-custom5 flex flex-col justify-between border-custom5 pt-3 rounded-t mr-10 font-normal transition-colors duration-300'
                  : 'text-sm  text-custom4 py-3 mr-10 font-normal cursor-pointer hover:text-custom3 transition-colors duration-300'
              }
            >
              <span className='mb-3 cursor-pointer'>Education</span>
              {activeStatus == 1 && (
                <div className='w-full h-1 bg-custom5 hover:bg-custom3 rounded-t-md transition-colors duration-300' />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(2)}
              className={
                activeStatus == 2
                  ? 'text-sm text-custom5 flex flex-col justify-between border-custom5 pt-3 rounded-t mr-10 font-normal transition-colors duration-300'
                  : 'text-sm  text-custom4 py-3 mr-10 font-normal cursor-pointer hover:text-custom3 transition-colors duration-300'
              }
            >
              <span className='mb-3 cursor-pointer'>AcroBuzz</span>
              {activeStatus == 2 && (
                <div className='w-full h-1 bg-custom5  hover:bg-custom3 rounded-t-md transition-colors duration-300' />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(3)}
              className={
                activeStatus == 3
                  ? 'text-sm text-custom5 flex flex-col justify-between border-custom5 pt-3 rounded-t mr-10 font-normal transition-colors duration-300'
                  : 'text-sm  text-custom4 py-3 mr-10 font-normal cursor-pointer hover:text-custom3 transition-colors duration-300'
              }
            >
              <span className='mb-3 cursor-pointer'>BeatsforBeats</span>
              {activeStatus == 3 && (
                <div className='w-full h-1 bg-custom5  hover:bg-custom3 rounded-t-md transition-colors duration-300' />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(4)}
              className={
                activeStatus == 4
                  ? 'text-sm text-custom5 flex flex-col justify-between border-custom5 pt-3 rounded-t mr-10 font-normal transition-colors duration-300'
                  : 'text-sm  text-custom4 py-3 mr-10 font-normal cursor-pointer hover:text-custom3 transition-colors duration-300'
              }
            >
              <span className='mb-3 cursor-pointer'>Free game</span>
              {activeStatus == 4 && (
                <div className='w-full h-1 bg-custom5  hover:bg-custom3 rounded-t-md transition-colors duration-300' />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyNav;
