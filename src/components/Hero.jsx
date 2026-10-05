import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "../data.js";
import { Win } from "./Win.jsx";

const script = [
  { cmd: "whoami", out: "Biki Haldar, Software Developer" },
  { cmd: "echo $COMPANY", out: "Gixtech IT Solutions Pvt Ltd (since Sep 2026)" },
  { cmd: "cat stack.txt", out: "MongoDB  Express  React  Node.js  React Native" },
  { cmd: "ls projects/", out: "spare-express  ai-website-builder  tech-hub" },
];

function Terminal() {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [step, setStep] = useState(reduce ? script.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (step >= script.length) return;
    const cmd = script[step].cmd;
    const t = setTimeout(
      () => {
        if (chars < cmd.length) setChars(chars + 1);
        else { setStep(step + 1); setChars(0); }
      },
      chars < cmd.length ? 60 : 500
    );
    return () => clearTimeout(t);
  }, [step, chars]);

  return (
    <Win title="biki@gixtech: ~" bodyClass="min-h-[13.5rem] p-4 font-mono text-[13px] leading-7 sm:text-sm">
      {script.slice(0, step).map((l) => (
        <div key={l.cmd}>
          <p><span className="text-emerald-500">$</span> {l.cmd}</p>
          <p className="text-slate-500 dark:text-slate-400">{l.out}</p>
        </div>
      ))}
      <p>
        <span className="text-emerald-500">$</span> {step < script.length ? script[step].cmd.slice(0, chars) : ""}
        <span className="animate-blink text-indigo-500">▋</span>
      </p>
    </Win>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-96 w-96 animate-blob rounded-full bg-indigo-500/30 blur-3xl dark:bg-indigo-600/25" />
        <div className="absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-cyan-400/30 blur-3xl [animation-delay:-5s] dark:bg-cyan-500/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,.09)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 !rounded-full px-4 py-1.5 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role} at {profile.company}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="grad-text">Biki Haldar</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 max-w-xl text-lg leading-relaxed">
            I build full-stack web and mobile apps with the MERN stack and React Native: secure APIs, payments, and interfaces that feel fast.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6">
            <Terminal />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="grad-bg rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5">View projects</a>
            <a href={profile.resume} download className="glass flex items-center gap-2 !rounded-lg px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"><Download size={16} /> Download resume</a>
            <div className="flex gap-2">
              {[[Github, profile.github, "GitHub"], [Linkedin, profile.linkedin, "LinkedIn"], [Mail, `mailto:${profile.email}`, "Email"]].map(([Icon, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass flex h-11 w-11 items-center justify-center !rounded-lg transition hover:-translate-y-0.5 hover:text-indigo-500"><Icon size={18} /></a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative mx-auto w-72 sm:w-[21rem]">
          <div className="grad-bg absolute -inset-3 animate-gradient rounded-3xl bg-[length:200%_200%] opacity-50 blur-2xl" />
          <Win title="profile.jpg" className="relative">
            <img src={profile.photo} alt="Biki Haldar in a black shirt and sunglasses" className="aspect-[4/5] w-full object-cover object-top" />
          </Win>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute -bottom-5 -left-6 px-4 py-2.5 font-mono text-xs shadow-xl">
            <span className="text-fuchsia-500">git</span> status: <span className="text-emerald-500">open to build</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
