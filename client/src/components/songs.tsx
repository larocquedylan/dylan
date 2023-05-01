import React, { ReactNode } from 'react';
import ExpandableSection from './ExpandableSection';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the required styles

interface SongsProps {
  id: number;
  title: string;
  fileURL: string;
  download: string;
}

const Songs: React.FC<SongsProps> = ({ id, title, fileURL, download }) => {
  return (
    <ExpandableSection title={title} dates={''}>
      <div className='flex items-center'>
        <AudioPlayer
          src={fileURL}
          autoPlay={false}
          showJumpControls={false}
          customVolumeControls={[]}
          layout='horizontal-reverse'
          className='text-sm bg-custom1 rounded-xl'
        />
        <a
          href={download}
          className='px-3 py-1 ml-4 text-sm transition-colors duration-300 rounded bg-custom5 text-custom1 hover:bg-custom2'
        >
          Download
        </a>
      </div>
    </ExpandableSection>
  );
};

export default React.memo(Songs);
