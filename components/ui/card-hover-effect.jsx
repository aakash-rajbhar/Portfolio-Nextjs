import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  gap-4 ", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block  h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-cyan-500 blur-md block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={cn("bg-neutral-900")}>
            <CardTitle className="text-2xl">{item.category}</CardTitle>
            <CardDescription>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="flex items-center gap-2 bg-zinc-600 bg-opacity-20 text-zinc-400 text-sm font-medium px-3 py-1.5 rounded-lg border border-zinc-500/50 shadow-sm transition-all duration-300 hover:bg-zinc-500 hover:text-white"
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill.icon ? skill.icon : "🔗"} {skill.name}
                  </motion.span>
                ))}
              </div>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide ", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
