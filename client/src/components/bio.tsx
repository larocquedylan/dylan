import React from 'react';
import me from '../assets/me.jpg';

interface BioProps {}

const Bio: React.FC<BioProps> = ({}) => {
  return (
    <main className='flex col-auto max-w-custom mx-auto items-center py-6 px-4'>
      <img className='rounded-2xl w-40 h-40' src={me} alt='Dylan LaRocque' />
      <div className='flex flex-col space-y-2'>
        <p className='text-custom5 font-medium text-lg ml-10'>
          {' '}
          Yo, I'm Dylan.{' '}
        </p>
        <p className='text-custom5 font-medium text-lg'></p>
      </div>
    </main>
  );
};

export default Bio;
