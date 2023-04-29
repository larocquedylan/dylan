import React from 'react';
import convertUrlsToAnchors from '../utils/convertUrqlToAnchor';
import paragraphBreak from '../utils/paragraphBreak';
import ExpandableSection from './ExpandableSection';

interface AcroBuzzProps {
  key: string;
  title: string;
  description: string;
  dates: string;
}

const AcroBuzz: React.FC<AcroBuzzProps> = ({ title, dates, description }) => {
  const paragraphs = paragraphBreak(description);

  const urlAliases = {
    'https://github.com/larocquedylan/AcroBuzz-Server': 'Server repo',
    'https://github.com/larocquedylan/AcroBuzz-Client': 'Client repo',
    'https://acrobuzz.larocque.xyz': 'AcroBuzz',
  };

  const boldKeywords = (text: string) => {
    const keywords = ['Frontend', 'Backend', 'DevOps'];
    keywords.forEach((keyword) => {
      const boldKeyword = `<strong>${keyword}</strong>`;
      text = text.replace(new RegExp(`(${keyword})`, 'g'), boldKeyword);
    });
    return text;
  };

  return (
    <ExpandableSection title={title} dates={dates}>
      {paragraphs.map((paragraph, index) => {
        const htmlContent = convertUrlsToAnchors(
          boldKeywords(paragraph),
          urlAliases
        );
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

export default React.memo(AcroBuzz);
