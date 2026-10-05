import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  ["about", "about.ts"],
  ["experience", "experience.log"],
  ["projects", "projects/"],
  ["skills", "skills.json"],
  ["education", "education.txt"],
  ["contact", "contact.sh"],
];

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "bg-white/85 backdrop-blur-lg dark:bg-[#080c18]/85" : ""}`}>
      <motion.div style={{ scaleX }} className="grad-bg absolute inset-x-0 bottom-0 h-[2px] origin-left" />
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
          <span className="text-emerald-500">~/</span>biki<span className="grad-text">.dev</span>
        </a>
        <ul className="hidden items-center md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`block border-b-2 px-3.5 py-4 font-mono text-xs transition ${active === id ? "border-indigo-500 text-indigo-600 dark:text-white" : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="glass flex h-9 w-9 items-center justify-center !rounded-lg transition hover:scale-105">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="glass flex h-9 w-9 items-center justify-center !rounded-lg md:hidden">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="px-5 pb-3 md:hidden">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 font-mono text-sm">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
