import React from 'react';

export interface BodyNavItemProps {
  label: string;
  index: number;
  activeStatus: number;
  setActiveStatus: (index: number) => void;
}

const BodyNavItem: React.FC<BodyNavItemProps> = ({
  label,
  index,
  activeStatus,
  setActiveStatus,
}) => {
  const isActive = index === activeStatus;

  return (
    <li
      onClick={() => setActiveStatus(index)}
      className={
        isActive
          ? 'text-sm text-custom5 flex flex-col justify-between border-custom5 pt-3 rounded-t mr-10 font-normal transition-colors duration-300'
          : 'text-sm  text-custom4 py-3 mr-10 font-normal cursor-pointer hover:text-custom3 transition-colors duration-300'
      }
    >
      <span className='mb-3 cursor-pointer'>{label}</span>
      {isActive && (
        <div className='w-full h-1 transition-colors duration-300 bg-custom5 hover:bg-custom3 rounded-t-md' />
      )}
    </li>
  );
};

export default BodyNavItem;
