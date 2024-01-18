import React from 'react'
import me from '../assets/me.jpg'

const ResumeHero: React.FC = () => {
  return (
    <div className='flex items-center space-x-6'>
        <img
            className='rounded-2xl w-24 h-24 mb-4 md:mb-0'
            src={me}
            alt='Dylan LaRocque'
        />
        <div className='flex flex-col justify-center space-y-1'>
            <h1 className="text-xl font-medium text-custom5">Dylan LaRocque</h1>
            <h2 className="text-lg font-thin text-custom4">Software Enginner in Vancouver</h2>
        </div>
  </div>
  )
}

export default ResumeHero
