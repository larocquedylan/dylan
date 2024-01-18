import ResumeHero from '../components/ResumeHero'
import React from 'react'
import SectionHeading from '../components/SectionHeading'
import ResumeCard from '../components/ResumeCard'

const Resume: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="flex flex-col items-center space-y-6">
        <ResumeHero />
      </div>
      <div className="mt-10">
        <SectionHeading heading={'About'}/>
        <p className='text-custom4 font-thin text-md mb-6'>
          {' '}
          Yo, I&apos;m Dylan, a full-stack TypeScript pro, with some marketing know,
          I got a degree from the UBC, I write rhymes and make beats, hodl BTC,
          guiding ethics are to feed more than I eat and to create more than I
          consume.
        </p>
      </div>
      <div className="mt-10">
        <SectionHeading heading={'Contact'} />
        <div className="flex items-center space-x-2">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          {/* <Input id="email" placeholder="daniel@daquino.me" type="email" /> */}
        </div>
      </div>
      <div className="mt-10">
      <SectionHeading heading={'Work Experience'} />
        <div className="space-y-6">
            <ResumeCard date='2023' title='Software Engineering Intern Microsoft' description='Feature development within the Windows Photos Premium team focused on the early stage prototype of the Photos CollabGallery, a major project to launch in 2024, demonstrating skills in scalable and user focused development.'/>
            <ResumeCard date='06.2021 - 09-2021' title='Marketing Analyst' description='Built dashboards and data visualizations' />
            <ResumeCard date='09.2020 - 06.2021' title='Service Designer' description='Directed research and design of a new service line, conducting interviews, focus groups, and surveys to inform a comprehensive service model and business case.' />
        </div>
      </div>
    </div>
  )
}

export default Resume
