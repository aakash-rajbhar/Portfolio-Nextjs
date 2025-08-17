"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export function ProjectCards({ projects }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 px-6  grid place-items-center z-[100]">
            {/* <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button> */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-fit md:max-w-lg h-fit md:max-h-[90%] flex flex-col bg-neutral-900 rounded-lg sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className=" overflow-hidden"
              >
                <img
                  width={400}
                  height={300}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <div>
                <div className="flex flex-col gap-6 justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {active.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-neutral-800 rounded-full text-xs whitespace-nowrap text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {active.githubUrl && (
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.githubUrl}
                        target="_blank"
                        className="px-4 py-3 flex items-center gap-1 text-sm rounded-full font-medium bg-neutral-800 text-cyan-400 hover:bg-cyan-900 hover:text-white transition-colors"
                      >
                        <FaGithub className="h-4 w-4" />
                        View Code
                      </motion.a>
                    )}
                    {active.liveUrl && (
                      <motion.a
                        layoutId={`live-${active.title}-${id}`}
                        href={active.liveUrl}
                        target="_blank"
                        className="px-4 py-3 flex items-center gap-1 text-sm rounded-full font-medium bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                      >
                        <GoLinkExternal className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full gap-4">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="py-4 lg:px-4 gap-4 flex  justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row ">
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="aspect-video max-w-20 lg:max-w-28 overflow-hidden"
              >
                <img
                  width={200}
                  height={150}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-medium text-neutral-200 "
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.description}-${id}`}
                  className="text-neutral-400 line-clamp-1 md:line-clamp-2"
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
            <motion.a
              layoutId={`button-${project.title}-${id}`}
              href={project.ctaLink}
              target="_blank"
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-cyan-500 hover:text-white text-black transition-all duration-200"
              transition={{ exit: { duration: 0.1 } }}
            >
              View
            </motion.a>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };
