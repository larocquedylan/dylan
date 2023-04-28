import React, { useState } from 'react';

interface AcroBuzzProps {
  key: string;
  title: string;
  description: string;
  dates: string;
}

const AcroBuzz: React.FC<AcroBuzzProps> = ({
  key,
  title,
  dates,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // Split description into paragraphs
  const paragraphs = description.split(/<br\/>|\\n\\n/);

  const urlAliases = {
    'https://github.com/larocquedylan/AcroBuzz-Server': 'Server repo',
    'https://github.com/larocquedylan/AcroBuzz-Client': 'Client repo',
    'https://acrobuzz.larocque.xyz': 'AcroBuzz',
  };

  const convertUrlsToAnchors = (text: string) => {
    const urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, (url) => {
      const alias = urlAliases[url] || url;
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold">${alias}</a>`;
    });
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
    <div className='flex flex-col'>
      <div className='flex items-center justify-between p-4 pr-0 bg-custom1'>
        <h2 className='text-custom5 text-sm'>{title}</h2>
        <button onClick={handleClick} className='focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`transform transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#a6e1fa'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </button>
      </div>
      {expanded && (
        <div
          className='ml-4 p-4 bg-custom2 text-custom5 rounded transition duration-500 ease-in-out max-h-0 overflow-hidden'
          style={{ maxHeight: expanded ? '100vh' : '0' }}
        >
          <p className='mb-4 text-sm'> {dates}</p>
          {paragraphs.map((paragraph, index) => {
            const htmlContent = convertUrlsToAnchors(boldKeywords(paragraph));
            return (
              <p
                key={index}
                className='mb-2 text-sm'
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AcroBuzz;
