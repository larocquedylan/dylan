import React from 'react';
import IconGithubAlt from '../assets/github';
import IconLinkedinLine from '../assets/linkedin';
import IconTwitterAlt from '../assets/twitter';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className='px-4 pt-4'>
      <div className='max-w-custom mx-auto flex justify-between items-center py-2'>
        <a className='text-custom5 font-medium tracking-wider text-lg' href='/'>
          {' '}
          {/* Dylan LaRocque */}
        </a>
        <div className='flex space-x-2'>
          <a
            href='https://github.com/'
            className='p-1 rounded-md border border-custom5  hover:text-custom4 hover:border-custom4 transition-colors duration-300'
          >
            <IconGithubAlt />
          </a>
          <a
            href='https://linkedin.com/'
            className='p-1 rounded-md border border-custom5  hover:text-custom4 hover:border-custom4 transition-colors duration-300'
          >
            <IconLinkedinLine />
          </a>
          <a
            href='https://twitter.com/'
            className='p-1 rounded-md border border-custom5 hover:border-custom4 transition-colors duration-300  hover:text-custom4 '
          >
            <IconTwitterAlt />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
