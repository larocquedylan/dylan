import React from 'react'
import me from '../assets/me.jpg'
// import example from '../articles/example.mdx'
// import * as everything from '../articles/example.mdx' // Assumes an integration is used to compile MDX -> JS.

// interface BioProps {}

const Bio = (): React.ReactNode => {
  // console.log(everything) // {Thing: [Function: Thing], default: [Function: MDXContent]}

  return (
    <main className='flex flex-col md:flex-row max-w-custom mx-auto items-center py-6 px-4'>

      <img
        className='rounded-2xl w-40 h-40 mb-4 md:mb-0'
        src={me}
        alt='Dylan LaRocque'
      />
      <div className='flex flex-col space-y-2 text-center md:text-left md:ml-10'>
        <p className='text-custom5 font-medium text-md'>
          {' '}
          Yo, I&apos;m Dylan, a full-stack TypeScript pro, with some marketing know,
          I got a degree from the UBC, I write rhymes and make beats, hodl BTC,
          guiding ethics are to feed more than I eat and to create more than I
          consume.
        </p>
        <p className='text-custom5 font-medium text-md'>
          I (almost) launched a startup, you can read our pitchdeck
          <a
            href='/focus-business-report.pdf'
            download
            className='font-semibold text-custom4 hover:underline'
          >
            {' '}
            here
          </a>
          , I&apos;ve worked with the BC Public Service, RBC, UBC, OneFeather and as
          a medic. This is my
          <a
            href='/resume.pdf'
            download
            className='font-semibold text-custom4 hover:underline'
          >
            {' '}
            resume{' '}
          </a>
          . If you want to chat music, bitcoin, sweet nothings or anything
          between, reach out!
        </p>
      </div>

    </main>
  )
}

export default Bio
