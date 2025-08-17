import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { Cog, GitBranch, PanelRightClose, SquareTerminal } from "lucide-react";

const MiscellaneousSection = () => {
  return (
    <motion.section
      id="miscellaneous"
      className="mb-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h2
        className="text-white text-3xl font-medium mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Extras
      </motion.h2>

      {/* VS Code Theme */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.h3 className="text-xl text-white font-medium mb-4">
          Created a VS Code Theme
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-cyan-800 min-h-[400px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-md">
              <h2 className="text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                SkyCode Dark Theme
              </h2>
              <p className="mt-2 text-left text-sm text-neutral-200">
                SkyCode is a clean, modern VS Code theme for a distraction-free
                coding experience. Optimized for dark mode, it offers
                high-contrast colors for readability and supports many languages
                and file types.
              </p>
            </div>
            <img
              src="/images/theme-preview.webp"
              width={400}
              height={400}
              alt="SkyCode VS Code Theme Extension"
              className="absolute -right-4 lg:-right-[5%]  -bottom-4 lg:-bottom-16 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[200px] bg-violet-900/80">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Why You'll Love It
              </h2>
              <ul className="mt-4 px-4 lg:px-0 space-y-2 text-left text-xs list-disc text-neutral-200">
                <li>Beautiful, vibrant color palette</li>
                <li>Enhanced syntax highlighting</li>
                <li>Minimal, focused UI</li>
                <li>Easy on the eyes for day and night coding</li>
                <li>Available free on the VS Code Marketplace</li>
              </ul>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-md relative z-10">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Get SkyCode for VS Code
              </h2>
              <p className="mt-4  text-left text-sm/2 text-neutral-200">
                Install SkyCode directly from the VS Code Marketplace and
                transform your editor into a visually stunning, productive
                workspace. Join hundreds of developers already using SkyCode to
                boost their workflow!
              </p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=AakashRajbhar.skycode-dark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-blue-100 transition cursor-pointer z-20 relative"
                style={{ position: "relative", zIndex: 20 }}
              >
                Get SkyCode Theme
              </a>
            </div>
            <img
              src="/images/theme-extension.webp"
              width={500}
              height={500}
              alt="SkyCode VS Code Theme Preview"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl pointer-events-none z-0"
              style={{ zIndex: 0, pointerEvents: "none" }}
            />
          </WobbleCard>
        </div>
      </motion.div>

      {/* Technologies & Tools */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.h3 className="text-xl text-white font-medium mb-6">
          Tools I Use
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Editor */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-700 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center shadow-lg"
          >
            <span className="text-3xl mb-3">
              <PanelRightClose className="w-8 h-8 text-white" />
            </span>
            <span className="text-lg font-semibold text-white mb-1">
              Editor
            </span>
            <span className="text-gray-300 text-sm text-center">
              VS Code, IntelliJ IDEA
            </span>
          </motion.div>
          {/* Terminal */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-700 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center shadow-lg"
          >
            <span className="text-3xl mb-3">
              <SquareTerminal className="w-8 h-8 text-white" />
            </span>
            <span className="text-lg font-semibold text-white mb-1">
              Terminal
            </span>
            <span className="text-gray-300 text-sm text-center">
              wsl, git bash, Windows Terminal
            </span>
          </motion.div>
          {/* Version Control */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-700 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center shadow-lg"
          >
            <span className="text-3xl mb-3">
              <GitBranch className="w-8 h-8 text-white" />
            </span>
            <span className="text-lg font-semibold text-white mb-1">
              Version Control
            </span>
            <span className="text-gray-300 text-sm text-center">
              Git, GitHub
            </span>
          </motion.div>
          {/* Productivity */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-700 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center shadow-lg"
          >
            <span className="text-3xl mb-3">
              <Cog className="w-8 h-8 text-white" />
            </span>
            <span className="text-lg font-semibold text-white mb-1">
              Productivity
            </span>
            <span className="text-gray-300 text-sm text-center">Notion</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h3 className="text-xl text-white font-medium mb-6">
          Languages
        </motion.h3>
        <ul className="space-y-6 pl-2 border-l-2 border-neutral-700">
          <li className="flex items-center gap-3 relative">
            <span className="absolute -left-4 w-4 h-4 bg-black rounded-full border-2 border-white shadow"></span>
            <span className="text-xl font-medium ml-2 text-neutral-100">
              Hindi
            </span>
            <span className="ml-1 px-2 py-1 rounded-full bg-neutral-800 text-yellow-300 text-[10px] ">
              Native
            </span>
          </li>
          <li className="flex items-center gap-3 relative">
            <span className="absolute -left-4 w-4 h-4 bg-black rounded-full border-2 border-white shadow"></span>
            <span className="text-xl font-medium ml-2 text-neutral-100">
              English
            </span>
            <span className="ml-1 px-2 py-1 rounded-full bg-neutral-800 text-blue-300 text-[10px] ">
              Professional
            </span>
          </li>
        </ul>
      </motion.section>
    </motion.section>
  );
};

export default MiscellaneousSection;
