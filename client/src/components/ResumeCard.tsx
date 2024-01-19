import React from 'react'

type props = {
    date: string;
    title: string;
    where?: string;
    techStack?: string;
    description: string;
}

const ResumeCard: React.FC<props> = ({ date, title, where, techStack, description }) => {
  const paragraphs = description.replace(/\\n/g, '\n').split('\n').map((paragraph, index) => {
    return (
    <p key={index} className="text-custom4 mb-2">
        {paragraph}
    </p>
    )
  })

  return (
    <div className="flex">
    <div className="w-1/4">
      <p className="text-sm text-custom4">{date}</p>
    </div>
    <div className="w-3/4">
      <h4 className="text-lg font-normal text-custom5">{title} </h4>
      {where
        ? (<p className="text-sm text-custom4 mb-2">{where}</p>)
        : (<><p className="text-sm text-custom4 mb-2">{techStack}</p></>)
      }
      <p className="text-custom4"> {paragraphs} </p>
    </div>
  </div>
  )
}

export default ResumeCard
