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
            description="Feature development within the Windows Photos Premium team focused on the early stage prototype for a major project set to launch in 2024, demonstrating skills in scalable and user focused development.\nResearch into image format standards, understanding the nuances of how cameras process and store information. This knowledge was pivotal in optimizing data handling and transfer within the browser for maximum efficiency."
          />
          <ResumeCard
            title="Occupational First Aid Attendant | Impact Safety Solutions"
            date="11 2021 - 05 2023"
            where="Edmonton, AB"
            description="Conducted safety meetings and provided onsite medical support on remote work sites (provide CPR, patient assessments, critical airway interventions, circulator interventions, and small wound management). \nThis was a detour but incredibly interesting for me as I learned how to save a life."
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
            title="Co-founder of a failed startup | Focus"
            date="09 2019 - 05 2020"
            where="Vancouver, BC"
            description="Performed comprehensive market research, profiling customers, mapping user journeys, and conducting competitive analysis to identify opportunities. Lead the development of the business plan and go-to-market strategy incorporating financial projections, revenue model, and budget forecast based on literature review, market sizing, and pricing strategies."
          />
          <ResumeCard
            title="Finance Analyst Intern | Royal Bank of Canada"
            date="05 2018 - 08 2018"
            where="Toronto, ON"
            description="Performed due diligence and support on the build out of RBC's Investor and Treasury Services cost allocation model.\nProvided ad-hoc analysis for multiple business advisors on the Performance Management Team."
          />
          <ResumeCard
            title="Teaching Assistant | UBC, Darren Dahl"
            date="04 2018"
            where="Vancouver, BC"
            description="Provided administrative support and cataloging of Dr. Dahl's MBA course, Creativity (BA 562)."
          />
          <ResumeCard
            title="Research Assistant | UBC, Darren Dahl"
            date="01 2018 - 04 2020"
            where="Vancouver, BC"
            description="Conducted qualitative market research using a variety of methods, including focus groups, surveys, interviews, and experiments for Dr. Darren Dahl of the Marketing and Behavioural Science division at Robert H. Lee Graduate School."
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
            techStack="Next.js, SSR"
            link="https://rclf.vercel.app"
            description="Custom Next.Js marketing build for River City Leaders Forum in Edmonton."
          />
          <ResumeCard
            date="04 2023"
            title="AcroBuzz"
            techStack="Next.js, Apollo, TypeGraphQL, Prisma, PostgreSQL, Redis, Docker, Jest"
            link="https://acrobuzz.larocque.xyz/"
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
              date="01 2024"
              title="Joy of React"
              link="https://www.joyofreact.com/"
              techStack="Remote"
              description="Modern React practices with hooks, component architecture, and state management. The course also goes into server side rendering with Next.js, layout animations with Framer Motion "
            />
            <ResumeCard
              date="03 2023"
              title="JavaScript Algorithms and Data Structures"
              techStack="Remote"
              link="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass"
              description="Fundamental computer science topics, including Big O notation, recursion, searching/sorting algorithms, and data structures like linked lists, trees, and graphs."
            />
            <ResumeCard
              date="03 2023"
              title="EpicReact.Dev"
              link="https://epicreact.dev/"
              techStack="Remote"
              description="In-depth coverage of React fundamentals, advanced hooks and component patterns, performance optimization, testing, and React Suspense from the creator of React Testing Library, Kent C. Dodds."
            />
            <ResumeCard
              date="11 2022 - 02 2023"
              title="BrainStation"
              where="Remote"
              link="https://brainstation.io/online/software-engineering-bootcamp"
              description="Software Engineering Bootcamp introducing HTML, CSS, JavaScript, React, Node, and MySQL"
            />
            <ResumeCard
              date="09 2016 - 05 2020"
              title="University of British Columbia"
              where="Vancouver, BC"
              description="Bachelor of Commerce in Marketing with Honours + Minor in Mathematics."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
