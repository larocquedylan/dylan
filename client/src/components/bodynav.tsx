import React, { useCallback, useEffect, useState } from 'react';
import BodyNavItem from './BodyNavItem';
import Education from './Education';
import AcroBuzz from './AcroBuzz';
import Songs from './Songs';

interface BodyNavProps {}

interface DataItem {
  id: number;
  program: string;
  dates: string;
  description: string;
  title: string;
  fileURL: string;
  download: string;
}

const BodyNav: React.FC<BodyNavProps> = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  const [educationData, setEducationData] = useState<DataItem[]>([]);
  const [acrobuzzData, setAcrobuzzData] = useState<DataItem[]>([]);
  const [songsData, setSongsData] = useState<DataItem[]>([]);

  const handleItemClick = useCallback(
    (index: number) => {
      setActiveStatus(index);
    },
    [setActiveStatus]
  );

  const navItems: any = [
    { label: 'Education', index: 1 },
    { label: 'AcroBuzz', index: 2 },
    { label: 'BeatsforBeats', index: 3 },
    { label: 'Free game', index: 4 },
  ];

  const fetchData = async (
    url: string,
    setData: React.Dispatch<React.SetStateAction<DataItem[]>>
  ) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchData('/education.json', setEducationData);
    fetchData('/acrobuzz.json', setAcrobuzzData);
    fetchData('http://larocque-dylan.fly.dev/songs', setSongsData);
  }, []);

  console.log('songdata', songsData);

  return (
    <div className='mx-auto max-w-custom '>
      <div className='relative mx-auto rounded sm:hidden sm:px-4'>
        <div className='absolute inset-0 z-0 w-6 h-6 m-auto mr-4 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-selector'
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
            <polyline points='8 9 12 5 16 9' />
            <polyline points='16 15 12 19 8 15' />
          </svg>
        </div>
        <select
          aria-label='Selected tab'
          className='relative z-10 block w-full p-4 bg-transparent rounded appearance-none form-select text-custom5 bg-custom1'
        >
          <option className='text-sm text-custom5'>Education </option>
          <option className='text-sm text-custom5'>AcroBuzz </option>
          <option selected className='text-sm text-custom5'>
            Songs
          </option>
          {/* <option className='text-sm text-custom5'>xyz </option>
          <option className='text-sm text-custom5'>abc </option> */}
        </select>
      </div>
      <div className='flex-wrap justify-between hidden rounded shadow sm:block bg-custom1'>
        <div className='h-12 xl:w-full xl:mx-0'>
          <ul className='flex px-4 xs:px-0'>
            {navItems.map((item: any) => (
              <BodyNavItem
                key={item.index}
                label={item.label}
                index={item.index}
                activeStatus={activeStatus}
                setActiveStatus={handleItemClick}
              />
            ))}
          </ul>
        </div>

        {activeStatus === 1 && (
          <div className='flex flex-col'>
            {educationData.map((edu) => (
              <Education
                key={edu.id.toString()}
                title={edu.program}
                dates={edu.dates}
                description={edu.description}
              />
            ))}
          </div>
        )}
        {activeStatus === 2 && (
          <div className='flex flex-col'>
            {acrobuzzData.map((result) => (
              <AcroBuzz
                key={result.id.toString()}
                title={result.program}
                dates={result.dates}
                description={result.description}
              />
            ))}
          </div>
        )}
        {activeStatus === 3 && (
          <div className='flex flex-col'>
            {songsData.map((song) => (
              <Songs
                key={song.id.toString()}
                id={song.id}
                title={song.title}
                download={song.download}
                fileURL={`http://larocque-dylan.fly.dev/songs/stream/${encodeURIComponent(
                  song.title
                )}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyNav;
