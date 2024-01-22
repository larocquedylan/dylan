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
    <p key={index} className="text-sm sm:text-md font-extralight sm:font-light text-custom4 mb-2">
        {paragraph}
    </p>
    )
  })

  return (
    <div className="flex">
      <div className="w-1/4 mr-5 sm:mr-0">
        <p className="text-sm sm:text-md font-extralight sm:font-light text-custom4 sm:mr-10">{date}</p>
      </div>
      <div className="w-3/4">
        <h4 className="text-sm sm:text-md font-extralight sm:font-light text-custom5">{title}</h4>
        {where
          ? (
          <p className="text-sm sm:text-md font-extralight sm:font-light mb-2 text-custom4">{where}</p>
            )
          : techStack
            ? (
          <p className="text-sm sm:text-md font-extralight sm:font-light mb-2 text-custom4">{techStack}</p>
              )
            : null}
            {paragraphs}
      </div>
    </div>
  )
}

export default ResumeCard
