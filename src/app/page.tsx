"use client";

import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypingEffect } from "@/components/TypingEffect";
import { TerminalBlock } from "@/components/TerminalBlock";
import { ProfileSection } from "@/components/ProfileSection";
import { ArrowRight, Github } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { FloatingStars } from "@/components/FloatingStars";

export default function Home() {
  const [os, setOs] = useState<"mac" | "windows">("mac");
  const [showStars, setShowStars] = useState(true);

  const macCommands = `# 1. Clone the repository
$ git clone https://github.com/udaysagarm/SpaceBlack.git

# 2. Enter the void
$ cd SpaceBlack

# 3. First Time Setup (Run Once)
$ ./spaceblack onboard

# 4. Daily Usage
$ ./spaceblack start`;

  const windowsCommands = `# 1. Clone the repository
$ git clone https://github.com/udaysagarm/SpaceBlack.git

# 2. Enter the void
$ cd SpaceBlack

# 3. First Time Setup (Run Once)
$ spaceblack onboard

# 4. Daily Usage
$ spaceblack start`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-background to-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="z-10 w-full max-w-3xl space-y-12 text-center pt-20">
        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
            <span className="text-neon-green mr-2">&gt;</span>
            <TypingEffect text="Initiating Space Black Protocol..." speed={70} />
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Your intelligent, self-evolving terminal companion.
          </p>
        </div>

        {/* Terminal Install Block */}
        <div className="mx-auto max-w-xl w-full text-left">
          <TerminalWindow
            header={
              <div className="flex gap-4">
                <button
                  onClick={() => setOs("mac")}
                  className={clsx(
                    "px-2 py-0.5 rounded text-xs transition-colors",
                    os === "mac"
                      ? "bg-neutral-800 text-neon-green font-bold"
                      : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  Mac/Linux
                </button>
                <div className="w-[1px] bg-neutral-800 h-4" />
                <button
                  onClick={() => setOs("windows")}
                  className={clsx(
                    "px-2 py-0.5 rounded text-xs transition-colors",
                    os === "windows"
                      ? "bg-neutral-800 text-neon-green font-bold"
                      : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  Windows
                </button>
              </div>
            }
          >
            <div className="space-y-4">
              <div>
                <p className="opacity-70">Loading source modules...</p>
                <p className="text-green-500">✔ GitHub Gateway connected</p>
              </div>

              <TerminalBlock>
                {os === "mac" ? macCommands : windowsCommands}
              </TerminalBlock>
            </div>
          </TerminalWindow>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="group flex items-center justify-center gap-2 rounded-lg bg-neon-green px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-neon-green/90 hover:shadow-[0_0_20px_-5px_var(--neon-green)]"
          >
            Read the Docs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="https://github.com/udaysagarm/SpaceBlack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-black px-6 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-700 hover:text-white"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>

          <button
            onClick={() => setShowStars(!showStars)}
            className={clsx(
              "flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all hover:bg-neutral-800",
              showStars
                ? "border-neon-green text-neon-green shadow-[0_0_15px_-3px_var(--neon-green)]"
                : "border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white"
            )}
          >
            Feel like stars
          </button>
        </div>
      </div>

      {showStars && <FloatingStars />}

      {/* Profile Section */}
      <ProfileSection />
    </main>
  );
}
