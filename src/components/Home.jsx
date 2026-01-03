import { Dot } from "lucide-react";
import React, { useState } from "react";
import Badge from "./Badge";
import UserName from "./UserName";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Products", "Stories", "Pricing", "Docs"];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center
                 bg-black text-white text-sm
                 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)]
                 bg-top bg-no-repeat"
    >
      {/* NAVBAR */}
      <nav
        className="flex items-center border mx-4 mt-6 w-full max-w-4xl justify-between
                      border-slate-700 px-4 py-2.5 rounded-full text-white"
      >
        {/* LOGO */}

        <a href="/" className="flex items-center font-semibold">
          <Dot className="w-16 h-16 text-green-400" />
          <span className="text-white">LOGO</span>
        </a>

        {/* MENU */}
        <div
          className={`flex items-center gap-2
            max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full max-md:w-full
            max-md:bg-black/60 max-md:backdrop-blur
            max-md:z-10 max-md:justify-center max-md:flex-col
            transition-all duration-300
            ${menuOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-full transition
                ${
                  active === item
                    ? "border border-white/10 bg-white/10 font-medium"
                    : ""
                }`}
            >
              {item}
            </button>
          ))}

          {/* CLOSE (mobile) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden mt-6 bg-gray-800 hover:bg-black text-white
                       p-2 rounded-md aspect-square transition"
          >
            ✕
          </button>
        </div>

        {/* MOBILE OPEN */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden">
          ☰
        </button>

        {/* CTA */}
        <button
          className="hidden md:block bg-green-600 hover:bg-green-700
                           text-white px-4 py-2 rounded-full transition"
        >
          Contact Us
        </button>
      </nav>


          <div className="py-32">
            <Badge/>
            <div className="py-20">
              <UserName/>
            </div>
          </div>
      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        {/* COMMUNITY BADGE */}
        <div
          className="flex items-center justify-center p-1.5
                        rounded-full border border-green-900
                        bg-green-700/15 text-xs"
        >
         Connect with developers learning modern React together
        </div>

        {/* HEADING */}
        <h1
          className="text-4xl md:text-6xl text-center font-semibold
                       max-w-4xl mt-5
                       bg-gradient-to-r from-white to-[#748298]
                       text-transparent bg-clip-text"
        >
         Learn, Build, and Scale with Modern Web Technologies
        </h1>

        <p className="text-slate-300 md:text-base text-center max-w-2xl mt-3">
          Building real-world React skills through hands-on development.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-3 mt-8 text-sm">
          <button
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700
                             transition rounded-full"
          >
            Get Started
          </button>

          <button
            className="flex items-center gap-2 bg-white/10
                             border border-white/15 rounded-full
                             px-6 py-2.5"
          >
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
