import React from "react";
import Image from "next/image";

const MiscellaneousSection = () => {
  return (
    <section id="miscellaneous" className="mb-20">
      <h2 className="text-white text-3xl font-medium mb-6">Extras</h2>

      {/* VS Code Theme */}
      <div className="mb-12">
        <h3 className="text-xl text-white font-medium mb-4">
          Created a VS Code Theme
        </h3>
        <div className="bg-neutral-800 px-4 py-8 rounded-lg flex flex-col  items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Image
              src="/images/theme-preview.webp" // Replace with actual image path
              alt="VS Code Theme Preview"
              title="VS Code Theme Preview"
              width={600}
              height={250}
              className="w-full rounded-lg border border-neutral-700"
              loading="eager"
            />
            <Image
              src="/images/theme-extension.webp"
              alt="VS Code Theme Extension"
              title="VS Code Theme Extension"
              width={600}
              height={250}
              className="w-full rounded-lg border border-neutral-700"
              loading="eager"
            />
          </div>
          <div className="text-gray-300">
            <p className="mb-3">
              I created a custom VS Code theme that enhances readability and
              aesthetics while coding. It's optimized for dark mode and supports
              multiple languages.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=AakashRajbhar.skycode-dark" // Replace with actual link
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Get My Theme
            </a>
          </div>
        </div>
      </div>

      {/* Technologies & Tools */}
      <div className="mb-12">
        <h3 className="text-xl text-white font-medium mb-4">Tools I Use</h3>
        <div className="bg-neutral-800 p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          <div>
            <strong>Browser:</strong> Zen / Brave
          </div>
          <div>
            <strong>Editor:</strong> VS Code, IntelliJ IDEA
          </div>
          <div>
            <strong>Terminal:</strong> Warp / Windows Terminal
          </div>
          <div>
            <strong>Version Control:</strong> Git, GitHub
          </div>
          <div>
            <strong>Productivity:</strong> Notion
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl text-white font-medium mb-4">Languages</h3>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center px-4 py-2 bg-neutral-700 text-neutral-50 rounded-md text-sm tracking-wide">
            <svg
              width="20"
              height="20"
              viewBox="0 0 224 209"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5 33.5002C47.5 10 100 14.5 119.5 38.5003C139.54 63.1658 122 146.5 56 107C76 79.5003 126.57 119.743 121.5 156.5C111.5 229 29.5 203 5 169"
                stroke="#F5F5F5"
                strokeWidth="12"
              />
              <path
                d="M109.099 111.231H172.033V201V7L35 9.99229L223 7.00004"
                stroke="#F5F5F5"
                strokeWidth="12"
              />
            </svg>
            Hindi | Native
          </div>
          <div className="flex gap-1 items-center px-4 py-2 bg-neutral-700 text-neutral-50 rounded-md text-sm tracking-wide">
            <svg
              width="20"
              height="20"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.84659 7.15341C2.43182 7.15341 2.0554 7.07528 1.71733 6.91903C1.37926 6.75994 1.1108 6.53125 0.911932 6.23295C0.713068 5.93182 0.613636 5.56818 0.613636 5.14205C0.613636 4.76705 0.6875 4.46307 0.835227 4.23011C0.982955 3.99432 1.1804 3.80966 1.42756 3.67614C1.67472 3.54261 1.94744 3.44318 2.24574 3.37784C2.54688 3.30966 2.84943 3.25568 3.15341 3.21591C3.55114 3.16477 3.87358 3.12642 4.12074 3.10085C4.37074 3.07244 4.55256 3.02557 4.66619 2.96023C4.78267 2.89489 4.84091 2.78125 4.84091 2.61932V2.58523C4.84091 2.16477 4.72585 1.83807 4.49574 1.60511C4.26847 1.37216 3.9233 1.25568 3.46023 1.25568C2.98011 1.25568 2.60369 1.3608 2.33097 1.57102C2.05824 1.78125 1.86648 2.00568 1.75568 2.24432L0.801136 1.90341C0.971591 1.50568 1.19886 1.19602 1.48295 0.974432C1.76989 0.75 2.08239 0.59375 2.42045 0.505682C2.76136 0.414773 3.09659 0.369318 3.42614 0.369318C3.63636 0.369318 3.87784 0.394886 4.15057 0.446022C4.42614 0.494318 4.69176 0.59517 4.94744 0.748579C5.20597 0.901989 5.42045 1.13352 5.59091 1.44318C5.76136 1.75284 5.84659 2.16761 5.84659 2.6875V7H4.84091V6.11364H4.78977C4.72159 6.25568 4.60795 6.40767 4.44886 6.5696C4.28977 6.73153 4.07813 6.86932 3.81392 6.98295C3.54972 7.09659 3.22727 7.15341 2.84659 7.15341ZM3 6.25C3.39773 6.25 3.73295 6.17188 4.00568 6.01562C4.28125 5.85938 4.48864 5.65767 4.62784 5.41051C4.76989 5.16335 4.84091 4.90341 4.84091 4.63068V3.71023C4.7983 3.76136 4.70455 3.80824 4.55966 3.85085C4.41761 3.89062 4.25284 3.92614 4.06534 3.95739C3.88068 3.9858 3.70028 4.01136 3.52415 4.03409C3.35085 4.05398 3.21023 4.07102 3.10227 4.08523C2.84091 4.11932 2.59659 4.17472 2.36932 4.25142C2.14489 4.32528 1.96307 4.4375 1.82386 4.58807C1.6875 4.7358 1.61932 4.9375 1.61932 5.19318C1.61932 5.54261 1.74858 5.80682 2.0071 5.9858C2.26847 6.16193 2.59943 6.25 3 6.25Z"
                fill="white"
              />
            </svg>
            English | Professional
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiscellaneousSection;
