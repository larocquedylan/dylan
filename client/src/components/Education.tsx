import React from 'react';
import convertUrlsToAnchors from '../utils/convertUrqlToAnchor';
import paragraphBreak from '../utils/paragraphBreak';
import ExpandableSection from './ExpandableSection';

interface EducationProps {
  key: string;
  title: string;
  description: string;
  dates: string;
}

const Education: React.FC<EducationProps> = ({ title, dates, description }) => {
  const paragraphs = paragraphBreak(description);

  const urlAliases = {
    'https://mybcom.sauder.ubc.ca/courses-money-enrolment/courses/comm-466':
      'New Venture Design',
    'https://mybcom.sauder.ubc.ca/courses-money-enrolment/courses/comm-483':
      'General Leadership & Management',
    'https://epicreact.dev': 'EpicReact',
    'https://brainstation.io/course/online/remote-web-development-bootcamp':
      'BrainStation',
    'https://github.com/larocquedylan/beats-for-bits-api': 'Beats for Bits',
  };

  return (
    <ExpandableSection title={title} dates={dates}>
      {paragraphs.map((paragraph, index) => {
        const htmlContent = convertUrlsToAnchors(paragraph, urlAliases);
        return (
          <p
            key={index}
            className='mb-2 text-sm'
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></p>
        );
      })}
    </ExpandableSection>
  );
};

export default React.memo(Education);
