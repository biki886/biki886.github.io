import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Mail, Phone, Linkedin, GraduationCap, Award, GitCommitHorizontal } from "lucide-react";
import { profile, stats, experience, projects, skills, education, certifications } from "../data.js";
import { Win, Code, K, S, P, V, C } from "./Win.jsx";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

function Heading({ file, title, sub }) {
  return (
    <motion.div {...fade} className="mb-10">
      <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">$ cat {file}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      <div className="grad-bg mt-3 h-1 w-14 rounded-full" />
      {sub && <p className="mt-4 max-w-xl">{sub}</p>}
    </motion.div>
  );
}

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let f = 0;
    const id = setInterval(() => { f += 1; setN(Math.min(num, (num * f) / 30)); if (f >= 30) clearInterval(id); }, 30);
    return () => clearInterval(id);
  }, [inView, num]);
  return <span ref={ref}>{Number.isInteger(num) ? Math.round(n) : n.toFixed(1)}</span>;
}

export function About() {
  const str = (t) => <S>"{t}"</S>;
  const lines = [
    <C>// about.ts</C>,
    <><K>const</K> <V>biki</V> = {"{"}</>,
    <>  <P>role</P>: {str("Software Developer")},</>,
    <>  <P>company</P>: {str("Gixtech IT Solutions Pvt Ltd")},</>,
    <>  <P>since</P>: {str("Sep 2026")},</>,
    <>  <P>location</P>: {str("Malda, West Bengal")},</>,
    <>  <P>stack</P>: [{str("MongoDB")}, {str("Express")}, {str("React")}, {str("Node.js")}],</>,
    <>  <P>mobile</P>: {str("React Native + Expo")},</>,
    <>  <P>backend</P>: [{str("REST APIs")}, {str("JWT auth")}, {str("Stripe")}, {str("Firebase")}],</>,
    <>  <P>education</P>: {str("B.Tech, CGPA 8.4")},</>,
    <>{"}"};</>,
  ];
  return (
    <section id="about" className="section">
      <Heading file="about.ts" title="About me" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
        <motion.figure {...fade} className="relative">
          <div className="grad-bg absolute -inset-2 rounded-3xl opacity-30 blur-xl" />
          <Win title="portrait.png" className="relative">
            <img src={profile.art} alt="Illustrated portrait of Biki with a laptop, robot arm and data charts" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </Win>
        </motion.figure>
        <div className="space-y-6">
          <motion.div {...fade}><Win title="about.ts"><Code lines={lines} /></Win></motion.div>
          <motion.p {...fade} className="text-base leading-relaxed">
            I went from a diploma to a B.Tech, then built my full-stack base through the MERN program at TopStack India, an internship there, and three projects of my own: an e-commerce platform, an AI website builder and a React Native rental app. Since September 2026 I'm a software developer at {profile.company}.
          </motion.p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fade} transition={{ duration: 0.5, delay: i * 0.07 }} className="glass !rounded-lg p-4">
                <p className="grad-text font-mono text-3xl font-bold"><Counter value={s.value} /></p>
                <p className="mt-1 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <Heading file="experience.log" title="Experience" sub="Newest first, like git log." />
      <ol className="space-y-6">
        {experience.map((e, i) => (
          <motion.li key={e.title} {...fade} className="grid gap-4 sm:grid-cols-[2.5rem_1fr]">
            <div className="hidden flex-col items-center sm:flex">
              <GitCommitHorizontal className={i === 0 ? "text-emerald-500" : "text-slate-400"} />
              {i < experience.length - 1 && <div className="mt-1 w-px flex-1 bg-gradient-to-b from-indigo-500/60 to-transparent" />}
            </div>
            <Win title={`${e.company.toLowerCase().replace(/[^a-z]+/g, "-")}.log`}>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{e.title}</h3>
                  <span className="flex items-center gap-2">
                    {i === 0 && <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-xs text-emerald-600 dark:text-emerald-400">HEAD</span>}
                    <span className="chip font-mono">{e.period}</span>
                  </span>
                </div>
                <p className="grad-text mt-1 inline-block font-medium">{e.company}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-indigo-500">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Win>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <Heading file="projects/README.md" title="Projects" sub="Built end to end. Open the live app or read the code." />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article key={p.title} {...fade} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="group flex">
            <Win title={`projects/${p.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex w-full flex-col" bodyClass="flex flex-1 flex-col">
              <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${p.gradient} px-6 pt-5`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_55%)]" />
                <div className="relative mx-auto h-full max-w-[15rem] rounded-t-lg bg-white/90 shadow-xl transition duration-500 group-hover:-translate-y-2 dark:bg-slate-900/90">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-1.5 dark:border-white/10">
                    <i className="h-1.5 w-1.5 rounded-full bg-rose-400" /><i className="h-1.5 w-1.5 rounded-full bg-amber-400" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-1.5 p-3">
                    <div className={`h-2.5 w-2/3 rounded bg-gradient-to-r ${p.gradient}`} />
                    <div className="h-2 w-full rounded bg-slate-200 dark:bg-white/10" />
                    <div className="grid grid-cols-3 gap-2 pt-1"><i className="h-9 rounded bg-slate-200 dark:bg-white/10" /><i className="h-9 rounded bg-slate-200 dark:bg-white/10" /><i className="h-9 rounded bg-slate-200 dark:bg-white/10" /></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 font-mono text-xs text-indigo-600 dark:text-indigo-400">{p.kind}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="chip font-mono !text-[11px]">{t}</span>)}</div>
                <div className="mt-5 flex gap-4 text-sm font-semibold">
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-500"><ExternalLink size={15} /> Live</a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-500"><Github size={15} /> Code</a>
                </div>
              </div>
            </Win>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const rows = skills.map((g) => ({ key: g.group.toLowerCase().replace(/[^a-z]+/g, "_"), items: g.items }));
  const lines = [
    <>{"{"}</>,
    ...rows.map((r, i) => (
      <span className="flex flex-wrap gap-x-2">
        <span>  <P>"{r.key}"</P>: [</span>
        {r.items.map((t, j) => <span key={t}><S>"{t}"</S>{j < r.items.length - 1 ? "," : ""}</span>)}
        <span>]{i < rows.length - 1 ? "," : ""}</span>
      </span>
    )),
    <>{"}"}</>,
  ];
  return (
    <section id="skills" className="section">
      <Heading file="skills.json" title="Technical skills" />
      <motion.div {...fade}><Win title="skills.json"><Code lines={lines} /></Win></motion.div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <Heading file="education.txt" title="Education and certifications" />
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div {...fade}>
          <Win title="education.txt" bodyClass="divide-y divide-slate-200 dark:divide-white/10">
            {education.map((e) => (
              <div key={e.title} className="flex gap-4 p-5">
                <GraduationCap className="mt-1 shrink-0 text-indigo-500" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{e.title}</h3>
                  <p>{e.place}</p>
                  <p className="mt-1 font-mono text-xs text-slate-500">{e.period} · {e.meta}</p>
                </div>
              </div>
            ))}
          </Win>
        </motion.div>
        <motion.div {...fade}>
          <Win title="certifications.log" bodyClass="divide-y divide-slate-200 dark:divide-white/10">
            {certifications.map((c) => (
              <div key={c.name} className="flex gap-4 p-5">
                <Award className="mt-0.5 shrink-0 text-cyan-500" size={22} />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{c.name}</h3>
                  <p className="font-mono text-xs text-slate-500">{c.by}</p>
                </div>
              </div>
            ))}
          </Win>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const rows = [
    ["email", profile.email, `mailto:${profile.email}`, Mail],
    ["phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`, Phone],
    ["linkedin", "in/bikihaldar", profile.linkedin, Linkedin],
    ["github", "biki886", profile.github, Github],
  ];
  return (
    <section id="contact" className="section">
      <Heading file="contact.sh" title="Let's work together" sub="Have a project, a role or a question? Send an email and I'll reply soon." />
      <motion.div {...fade} className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <Win title="./contact.sh" bodyClass="p-5 font-mono text-sm leading-8">
          <p className="text-emerald-600 dark:text-emerald-400">$ ./contact.sh --list</p>
          {rows.map(([k, v, href, Icon]) => (
            <a key={k} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded px-2 transition hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-white">
              <Icon size={15} className="shrink-0 text-indigo-500" />
              <span className="w-20 shrink-0 text-sky-600 dark:text-sky-400">{k}</span>
              <span className="truncate">{v}</span>
            </a>
          ))}
          <p className="mt-1 text-slate-500">location  {profile.location}</p>
        </Win>
        <div className="text-center lg:text-left">
          <a href={`mailto:${profile.email}`} className="grad-bg inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5">
            <Mail size={18} /> Email me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 font-mono text-xs text-slate-500 sm:px-8">
        <span><span className="text-emerald-500">●</span> main · © {new Date().getFullYear()} {profile.name}</span>
        <span>React · Tailwind CSS · Vite</span>
      </div>
    </footer>
  );
}
