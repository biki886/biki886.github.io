// Reusable editor/terminal window + syntax colour helpers
export function Win({ title, children, className = "", bodyClass = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-[#0d1220]/80 dark:shadow-black/30 ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/80 px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.04]">
        <i className="h-3 w-3 rounded-full bg-rose-400" />
        <i className="h-3 w-3 rounded-full bg-amber-400" />
        <i className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate font-mono text-xs text-slate-500 dark:text-slate-400">{title}</span>
      </div>
      <div className={bodyClass}>{children}</div>
    </div>
  );
}

export const K = ({ children }) => <span className="text-fuchsia-600 dark:text-fuchsia-400">{children}</span>;
export const S = ({ children }) => <span className="text-emerald-600 dark:text-emerald-400">{children}</span>;
export const P = ({ children }) => <span className="text-sky-600 dark:text-sky-400">{children}</span>;
export const V = ({ children }) => <span className="text-amber-600 dark:text-amber-300">{children}</span>;
export const C = ({ children }) => <span className="text-slate-400 dark:text-slate-500">{children}</span>;

// Code block with line numbers. lines: array of JSX nodes
export function Code({ lines }) {
  return (
    <pre className="overflow-x-auto py-4 font-mono text-[13px] leading-7 sm:text-sm">
      {lines.map((l, i) => (
        <div key={i} className="flex px-4">
          <span className="mr-5 w-5 shrink-0 select-none text-right text-slate-400/70 dark:text-slate-600">{i + 1}</span>
          <span className="whitespace-pre-wrap break-words">{l}</span>
        </div>
      ))}
    </pre>
  );
}
