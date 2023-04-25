import React from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <div className='bg-blue-0 dark:blue-8 rounded-lg px-6 py-4 ring-1 ring-blue-5/5 shadow-xl font-inter'>
        <a href='#' className='text-blue-8'>
          Dylan LaRocque
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'></ul>
      </div>
    </nav>
  );
};

export default Navbar;
