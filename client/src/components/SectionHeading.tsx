import React from 'react'

type props = {
    heading: string;
}

const SectionHeading: React.FC<props> = ({ heading } : props) => {
  return (
        <h3 className="mb-6 text-lg font-thin text-custom5">{heading}</h3>
  )
}

export default SectionHeading
