// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Biki Haldar",
  role: "Software Developer",
  company: "Gixtech IT Solutions Pvt Ltd",
  location: "Malda, West Bengal, India",
  email: "bikihaldar2454@gmail.com",
  phone: "+91 89440 00886",
  github: "https://github.com/biki886",
  linkedin: "https://linkedin.com/in/bikihaldar/",
  resume: "/Biki_Haldar_Resume.pdf",
  photo: "/images/hero.jpg",
  art: "/images/art.jpg",
  typed: ["MERN stack apps", "REST APIs", "React Native apps", "clean, responsive UIs"],
  summary:
    "I build full-stack web and mobile apps with MongoDB, Express, React, Node.js and React Native. I like owning a feature from database design to deployment, with secure auth, clear APIs and interfaces that feel fast.",
};

export const stats = [
  { value: "2", label: "Roles in industry" },
  { value: "3", label: "Full-stack projects" },
  { value: "8.4", label: "B.Tech CGPA" },
  { value: "4", label: "Certifications" },
];

export const experience = [
  {
    title: "Software Developer",
    company: "Gixtech IT Solutions Pvt Ltd",
    period: "Sep 2026 – Present",
    points: [
      "Joined on 1 September 2026 as a full-time Software Developer.",
      "Building and maintaining features across frontend and backend.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company: "TopStack India",
    period: "Jun 2025 – Oct 2025",
    points: [
      "Built full-stack web applications with MongoDB, Express.js, React.js and Node.js in a project team.",
      "Built and consumed REST APIs, connecting frontend and backend end to end.",
      "Designed responsive UI components with Tailwind CSS across multiple modules.",
      "Used Git/GitHub with senior developers, taking part in code reviews and iterative delivery.",
      "Debugged issues across the stack in an agile-style workflow.",
    ],
  },
];

// Replace the "live" and "code" links with each project's real URLs.
export const projects = [
  {
    title: "SpareExpress",
    kind: "Auto parts e-commerce platform",
    desc: "Product browsing by category and subcategory, cart, checkout and order management, with an admin panel to manage products through REST APIs.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "Tailwind", "JWT"],
    live: "#",
    code: "https://github.com/biki886",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "AI Website Builder",
    kind: "AI-powered website generation platform",
    desc: "Users generate responsive websites with AI. Includes secure auth, a credit-based generation system with Stripe payments, and a project dashboard.",
    tags: ["MERN", "Redux Toolkit", "Tailwind", "Stripe", "REST API"],
    live: "#",
    code: "https://github.com/biki886",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "TechHub",
    kind: "Hardware sale and rental mobile app",
    desc: "Buy or rent RAM, laptops, monitors and GPUs. Week, month and year rental durations with automatic pricing, search, category filters, cart and Firestore checkout.",
    tags: ["React Native", "Expo", "Firebase", "Firestore", "React Navigation", "Context API"],
    live: "#",
    code: "https://github.com/biki886",
    gradient: "from-cyan-500 to-emerald-500",
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Redux Toolkit", "React Native", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  { group: "Databases", items: ["MongoDB", "Mongoose", "MySQL"] },
  { group: "Cloud & tools", items: ["AWS (EC2, S3, IAM)", "Git/GitHub", "Postman", "VS Code"] },
  { group: "Languages", items: ["JavaScript", "Python", "SQL"] },
];

export const education = [
  { title: "B.Tech", place: "Seacom Skills University, Birbhum", meta: "CGPA 8.4", period: "Jul 2021 – Aug 2024" },
  { title: "Diploma", place: "Malda Polytechnic, Malda", meta: "CGPA 7.7", period: "Aug 2018 – Jun 2021" },
];

export const certifications = [
  { name: "MERN Stack Development", by: "TopStack India" },
  { name: "AWS Cloud Training", by: "DH Technologies" },
  { name: "Data Science & Analytics", by: "Zidio Development" },
  { name: "Informatica PowerCenter & SQL", by: "H Source Technologies" },
];
