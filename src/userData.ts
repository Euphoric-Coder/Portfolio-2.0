import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "SpenWise - Expense Tracker",
    description:
      "A full-stack comprehensive Expense Tracker solution built using React & Next.js",
    longDescription:
      "A comprehensive Expense Tracker solution built with React, Next.js, postgreSQL (using NeonDB), Tailwind CSS, Clerk, LangChain, Groq, Drizzle ORM, ShadCN UI, Recharts, and Charts.js. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard. This is just a test for the following and it will be a test forever and going and going on and on and on and and and and and ",
    image: "/projects/spendwise.png",
    tags: [
      "React",
      "Javascript",
      "Next.js",
      "postgreSQL (NeonDB)",
      "Tailwind CSS",
      "Clerk",
      "LangChain",
      "Groq",
      "Drizzle ORM",
      "ShadCN UI",
      "Recharts",
      "Charts.js",
    ],
    github: "https://github.com/Euphoric-Coder/SpendWise--Expense-Tracker",
    demo: "https://spend-wise-expense-tracker.netlify.app/",
    video: "https://video.com",
    date: "2023",
    role: "Full Stack Developer",
    features: [
      "Secure User authentication and authorization",
      "Real-time Expense tracking",
      "Secure payment processing with Stripe",
      "Admin dashboard for order management",
      "Responsive design for all devices",
    ],
    live: true,
  },
  {
    title: "Task Management App",
    description:
      "Real-time task management application with collaborative features",
    longDescription:
      "A collaborative task management application that enables teams to organize and track their projects in real-time. Built with React and Firebase for seamless real-time updates.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Firebase", "Tailwind", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    video: "https://video.com",
    date: "2023",
    role: "Frontend Developer",
    features: [
      "Real-time collaboration",
      "Drag and drop task organization",
      "Team chat and comments",
      "File attachments",
      "Progress tracking and analytics",
    ],
    live: false,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio creation tool for developers",
    longDescription:
      "A tool that helps developers create and maintain their professional portfolios with ease. Features include customizable templates, markdown support, and automatic deployment.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
    tags: ["TypeScript", "React", "AWS", "Next.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    video: "https://video.com",
    date: "2024",
    role: "Lead Developer",
    features: [
      "Custom template creation",
      "Markdown content support",
      "Automatic deployment to AWS",
      "SEO optimization",
      "Analytics dashboard",
    ],
    live: true,
  },
];
