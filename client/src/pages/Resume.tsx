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
        <SectionHeading heading={'About'} />
        <p className="font-medium text-sm md:text-md text-custom4 mb-6">
          {' '}
          Yo, I&apos;m Dylan, a full-stack TypeScript pro, with some marketing
          know, I got a degree from the UBC, I write rhymes and make beats, hodl
          BTC, guiding ethics are to feed more than I eat and to create more
          than I consume.
        </p>
      </div>
      <div className="mt-10">
        <SectionHeading heading={'Work Experience'} />
        <div className="space-y-6">
          <ResumeCard
            title="Software Engineering Intern | Microsoft"
            date="09 2023 - 12 2023"
            where="Vancouver, BC"
            description="Feature development within the Windows Photos Premium team focused on the early stage prototype of the Photos CollabGallery, a major project to launch in 2024, demonstrating skills in scalable and user focused development.\nResearch into image format standards, understanding the nuances of how cameras process and store information. This knowledge was pivotal in optimizing data handling and transfer within the browser for maximum efficiency."
          />
          <ResumeCard
            title="Marketing Analyst | OneFeather"
            date="06 2021 - 09 2021"
            where="Remote"
            description="Built dashboards and data visualizations"
          />
          <ResumeCard
            title="Service Designer | BC Public Service"
            date="09 2020 - 06 2021"
            where="Vancouver, BC"
            description="Directed research and design of a new service line, conducting interviews, focus groups, and surveys to inform a comprehensive service model and business case."
          />
          <ResumeCard
            title="Co-founder | Focus"
            date="09 2019 - 05 2020"
            where="Vancouver, BC"
            description="Performed comprehensive market research, profiling customers, mapping user journeys, and conducting competitive analysis to identify opportunities. Lead the development of the business plan and go-to-market strategy incorporating financial projections, revenue model, and budget forecast based on literature review, market sizing, and pricing strategies."
          />
          <ResumeCard
            title="Teaching Assistant | UBC, Darren Dahl"
            date="01 2018 - 04 2020"
            where="Vancouver, BC"
            description="Assisted in qualitative research and data collection under Dr. Katherine White and Dr. Darren Dahl in the Marketing and Behaviour Science faculty at Sauder. Conducted focus groups, collected surveys, and administered experiments. Also provided note-taking support for Dr. Dahls MBA course on Creativity (BA 562)."
          />
          <ResumeCard
            title="Research Assistant | UBC, Darren Dahl"
            date="01 2016 - 04 2020"
            where="Vancouver, BC"
            description="Conducted qualitative market research using a variety of methods, including focus groups, surveys, interviews, and experiments for Dr Darren Dahl of the Marketing and Behavioural Science division at Robert H. Lee Graduate School."
          />
          <ResumeCard
            title="Aboriginal Student Ambassador | UBC"
            date="08 2017 - 04 2018"
            where="Vancouver, BC"
            description="Supported implementation of UBC Aboriginal Strategic Recruitment Plan with chaperoning tours of UBC for aboriginal youth groups. \nHired 3 juniour peer leaders and developed transportation and logistics plan for Destination UBC, an event bringing in the top 40 Canadian Aboriginal students for a weekend in Vancouver."
          />
        </div>
      </div>
      <div className="mt-10">
        <SectionHeading heading={'Projects'} />
        <div className="space-y-6">
          <ResumeCard
            date="09 2023"
            title="Web Exif Viewer"
            techStack="TypeScript, React, Vite, Vitest"
            description="Developed a web application that allows users to upload images in various formats (PNG, JPG, AIFF, HEIC, WebP, RAW) and parse EXIF data efficiently in the browser. The project served as a critical experiment in optimizing image data processing, exploring the limits of browser capabilities in handling and processing complex image data."
          />
          <ResumeCard
            date="05 2023"
            title="River City Leadership Forum"
            techStack="Next.js, SSR "
            description="Custom Next.Js marketing build for River City Leaders Forum in Edmonton. \n https://rclf.vercel.app/"
          />
          <ResumeCard
            date="04 2023"
            title="AcroBuzz"
            techStack="Next.js, Apollo, TypeGraphQL, Prisma, PostgreSQL, Redis, Docker, Jest"
            description="Built and deployed full stack web application using Vercel for front end hosting, a Digital Ocean VPS for backend infrastructure, Dokku for application management, and Postgres and Redis running in Docker containers."
          />
          <ResumeCard
            date="03 2023"
            title="Beats for Bits"
            techStack="React, Tailwind, Express, Docker, LnBits, MochaJS"
            description="Personal website to sell music with Bitcoin over the Lightning Network."
          />
          <ResumeCard
            date="02 2023"
            title="InStock"
            techStack="React, react-router-dom, Express, mysql, Knex, BEM/SASS."
            description="Collaborated on a full-stack React application as a part of an Agile team, delivering an Inventory Management System with an Express back-end."
          />
        </div>
        <div className="mt-10">
          <SectionHeading heading={'Education'} />
          <div className="space-y-6">
            <ResumeCard
              date="09 2016 - 05 2020"
              title="University of British Columbia"
              where="Vancouver, BC"
              description="Bachelor of Commerce in Marketing with Honours + Minor in Mathematics."
            />
            <ResumeCard
              date="11 2022 - 02 2023"
              title="BrainStation"
              where="Remote"
              description="Software Engineering Bootcamp."
            />
            <ResumeCard
              date="03 2023"
              title="EpicReact.Dev"
              techStack="Remote"
              description="Advanced, comprehensive training program for React developers, emphasizing practical, project-based learning with in-depth coverage of React fundamentals, hooks, testing, and performance optimization from the creator of React Testing Library, Kent C. Dodds."
            />
            <ResumeCard
              date="03 2023"
              title="JavaScript Algorithms and Data Structures Masterclass"
              techStack="Remote"
              description="Comprehensive course that teaches fundamental computer science topics, including Big O notation, recursion, sorting algorithms, and data structures like linked lists, trees, and graphs."
            />
            <ResumeCard
              date="01 2024"
              title="Joy of React"
              techStack="Remote"
              description="An interactive learning platform focused on modern React practices, offering hands-on experience with React hooks, component architecture, and state management."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
