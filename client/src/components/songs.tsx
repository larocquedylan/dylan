import React from 'react';
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
  const downloadURL = `http://localhost:8080/songs/download/${title}.wav`;

  //   console.log(downloadURL);
  //   console.log(id);

  return (
    <ExpandableSection title={title} dates={''}>
      <div className='flex items-center'>
        <AudioPlayer src={fileURL} autoPlay={false} />
        <a
          href={download}
          className='ml-4 px-3 py-1 text-sm bg-custom3 text-custom1 rounded hover:bg-custom2 transition-colors duration-300'
        >
          Download
        </a>
      </div>
    </ExpandableSection>
  );
};

export default React.memo(Songs);
