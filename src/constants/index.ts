// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python3,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  project1,
  linkedin,
  github,
} from "../assets";


// Navbar Links
export const NAV_LINKS = [
  { id: "about", title: "About", link: null },
  { id: "work", title: "Work", link: null },
  { id: "contact", title: "Contact", link: null },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/your-username/3d-portfolio",
  },
] as const;


// Services
export const SERVICES = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
] as const;


// Technologies
export const TECHNOLOGIES = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Firebase", icon: firebase },
  { name: "python3", icon: python3 },
] as const;


// Experiences (replace with real later if needed)
export const EXPERIENCES = [
  {
    title: "Freelance Web Developer",
    company_name: "Self Employed",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Building responsive and scalable web applications for clients.",
      "Creating modern UI with React and Tailwind CSS.",
      "Implementing authentication, APIs and real-time features.",
      "Deploying production-ready applications.",
    ],
  },
] as const;


// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Working with Sohini was smooth from start to finish. She understood exactly what I needed and delivered a clean, fast, and modern website ahead of schedule.",
    name: "Rahul Sharma",
    designation: "Founder",
    company: "DevNest Labs",
  },
  {
    testimonial:
      "We needed performance improvements and UI refinements, and Sohini handled everything efficiently. Our site now loads faster and looks far more professional.",
    name: "Ananya Gupta",
    designation: "Product Designer",
    company: "PixelForge Studio",
  },
  {
    testimonial:
      "Working with Sohini was a great decision for our business. She transformed our idea into a clean, scalable product and supported us throughout the process.",
    name: "Daniel Reed",
    designation: "Marketing Manager",
    company: "LaunchGrid Startup",
  },
] as const;


// Projects
export const PROJECTS = [
  {
    name: "FocusForge",
    description:
      "Productivity and focus tracking web app with real-time analytics and progress tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: project1,
    live_site_link: "https://focusforge-app-c75bf.web.app/",
  },
] as const;


// Social Links (ONLY LinkedIn + GitHub)
export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sohini-mandal-622756368/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sohinicode",
  },
] as const;
