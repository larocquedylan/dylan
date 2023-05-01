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
    { label: 'Learns', index: 1 },
    { label: 'AcroBuzz', index: 2 },
    { label: 'Beats4Bits', index: 3 },
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
    fetchData('https://larocque-dylan.fly.dev/songs', setSongsData);
  }, []);

  return (
    <div className='mx-auto max-w-custom '>
      <div className='flex-wrap justify-between rounded shadow sm:block bg-custom1'>
        {/* <div className='h-12 xl:w-full xl:mx-0'> */}
        <div className='h-12 w-full md:w-auto md:mx-0'>
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
                fileURL={`https://larocque-dylan.fly.dev/songs/stream/${encodeURIComponent(
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
