import React from 'react'

type props = {
    date: string;
    title: string;
    description: string;
}

const ResumeCard: React.FC<props> = ({ date, title, description }) => {
  return (
    <div className="flex">
    <div className="w-1/4">
      <p className="text-sm text-custom4">{date}</p>
    </div>
    <div className="w-3/4">
      <h4 className="text-lg font-normal text-custom5">
        {title}
      </h4>
      <p className="text-sm text-custom4 mb-2">Remote</p>
      <p className="text-custom4">
        {description}
      </p>
    </div>
  </div>
  )
}

export default ResumeCard
