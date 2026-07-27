import React from 'react'
import {Blur} from '../animation/Animation.jsx'
import { FaD } from 'react-icons/fa6'
const projects = [
  {
    title: "NETFLIX-UI-WEBAPP",
    category: "MOVIES/TV",
    year: "2026",
    description:
      "A clean portfolio site focused on strong typography and smooth interaction.",
    tags: ["React", "Tailwind"],
    url:"https://netflix-ui-web-app-2-rdkm.vercel.app/"
  },
  {
    title: "College-management-portal",
    category: "Management Website",
    year: "2025",
    description:
      "A polished landing page for a creative studio with bold visuals and subtle motion.",
    tags: ["UI Design", "Responsive", "SEO"],
    url:"https://college-management-portal-frontend.vercel.app/"
  },
  {
    title: "Clone-of-K72-WEBSITE",
    category: "Agency Website clone",
    year: "2025",
    description:
      "A minimal gallery experience designed to present photography work with elegance.",
    tags: ["Gallery", "Design", "Animation"],
    url:""
  },
  {

    title: "Next Commerce",
    category: "E-commerce",
    year: "2025",
    description:
      "A modern shopping interface built for clarity, speed, and conversion.",
    tags: ["UX", "Product Cards", "Checkout"],
    url:""
    
  },
]

const repeatedProjects = [...projects, ...projects]

function ProjectCard({ project, compact = false }) {

  
  return (
    <article
      className={[
        "rounded-[1.75rem] border border-white/10 bg-white/6 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10",
        compact ? "w-full" : "w-[18rem] shrink-0 sm:w-[22rem]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div >
          
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            {project.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
          {project.year}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-white/70">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/55">
        <span>View case study</span>
     
        <span className="text-lg">-&gt;</span>
      </div>
    </article>
  )
}

export default function Project() {
  return (

    <section className="relative  overflow-x-hidden bg-[#111111] py-16 text-white sm:py-20">
      <Blur>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/45">
              Selected Work
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              A smooth showcase of the projects I've built for my portfolio.
            </h2>
          </div>

          
        </div>
      </div></Blur>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 md:hidden">
        <div  className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <a href={project.url}
            target='_blank'
             >
            <ProjectCard  key={project.title} project={project} compact /></a>
          ))}
        </div>
      </div>

      <div className="relative mt-2 hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent sm:w-40" />

        <div className="group relative overflow-hidden py-4">
          <div
            className="flex w-max gap-5 px-5 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: "project-marquee-right 32s linear infinite" }}
          >
            {repeatedProjects.map((project, index) => (
              <a href={project.url}
            target='_blank'
             >
              <ProjectCard key={`${project.title}-${index}`} project={project} /></a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
         
        </div>
      </div>

      <style>{`
        @keyframes project-marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
      }
