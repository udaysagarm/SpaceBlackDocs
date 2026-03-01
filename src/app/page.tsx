"use client";

import Link from "next/link";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypingEffect } from "@/components/TypingEffect";
import { TerminalBlock } from "@/components/TerminalBlock";
import { ProfileSection } from "@/components/ProfileSection";
import { BentoGrid } from "@/components/BentoGrid";
import { InteractiveTabs } from "@/components/InteractiveTabs";
import { ArrowRight, Github, Shield, Database, Zap, Copy, Check } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { FloatingStars } from "@/components/FloatingStars";

export default function Home() {
  const [os, setOs] = useState<"mac" | "linux" | "windows">("mac");
  const [showStars, setShowStars] = useState(true);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  type CommandLine = { label: string; cmd: string };

  const commandSets: Record<"mac" | "linux" | "windows", CommandLine[]> = {
    mac: [
      { label: "Install Space Black", cmd: "curl -fsSL https://spaceblack.info/install.sh | bash" },
      { label: "Launch Ghost", cmd: "ghost start" },
    ],
    linux: [
      { label: "Install Space Black", cmd: "curl -fsSL https://spaceblack.info/install.sh | bash" },
      { label: "Launch Ghost", cmd: "ghost start" },
    ],
    windows: [
      { label: "Clone the repository", cmd: "git clone https://github.com/udaysagarm/SpaceBlack.git && cd SpaceBlack" },
      { label: "Launch Ghost", cmd: "ghost start" },
    ],
  };

  const currentCommands = commandSets[os];

  const handleCopy = async (cmd: string, idx: number) => {
    await navigator.clipboard.writeText(cmd);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-background to-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="z-10 w-full max-w-3xl space-y-12 text-center pt-20">
        {/* Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
            <span className="text-neon-green mr-2">&gt;</span>
            <TypingEffect text="Initiating SpaceBlack Infrastructure..." speed={70} />
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            The terminal operating system for autonomous agents.
            <br className="hidden md:inline" />{" "}
            <span className="text-neutral-500">Summon the ghost agent.</span>
          </p>
        </div>

        {/* Terminal Install Block */}
        <div className="mx-auto max-w-2xl w-full text-left relative">
          {/* Ambient Glow behind terminal */}
          <div className="absolute inset-0 bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <TerminalWindow
              header={
                <div className="flex gap-4">
                  {(["mac", "linux", "windows"] as const).map((tab, i) => (
                    <div key={tab} className="flex items-center gap-4">
                      {i > 0 && <div className="w-[1px] bg-neutral-800 h-4" />}
                      <button
                        onClick={() => setOs(tab)}
                        className={clsx(
                          "px-2 py-0.5 rounded text-xs transition-colors",
                          os === tab
                            ? "bg-neutral-800 text-neon-green font-bold"
                            : "text-neutral-500 hover:text-neutral-300"
                        )}
                      >
                        {tab === "mac" ? "macOS" : tab === "linux" ? "Linux" : "Windows"}
                      </button>
                    </div>
                  ))}
                </div>
              }
            >
              <div className="space-y-4">
                <div>
                  <p className="opacity-70 font-mono">Loading source modules...</p>
                  <p className="text-green-500 font-mono">✔ GitHub Gateway connected</p>
                </div>

                <div className="space-y-3">
                  {currentCommands.map((item, idx) => (
                    <div key={`${os}-${idx}`} className="group/cmd">
                      <p className="text-neutral-500 font-mono text-xs mb-1"># {item.label}</p>
                      <div className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] border border-neutral-800/50 px-4 py-2.5 hover:border-neutral-700/70 transition-colors">
                        <code className="text-sm md:text-base text-neutral-200 font-mono truncate">
                          <span className="text-neon-green mr-2 select-none">$</span>
                          {item.cmd}
                        </code>
                        <button
                          onClick={() => handleCopy(item.cmd, idx)}
                          className="shrink-0 text-neutral-500 hover:text-neon-green transition-all opacity-0 group-hover/cmd:opacity-100 focus:opacity-100"
                          aria-label={`Copy: ${item.cmd}`}
                        >
                          {copiedIdx === idx ? (
                            <Check className="h-4 w-4 text-neon-green" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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
              "flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold font-mono transition-all hover:bg-neon-green/10 shadow-[0_0_15px_-3px_var(--neon-green)]",
              showStars
                ? "border-neon-green text-neon-green"
                : "border-neutral-700 text-neutral-400 hover:border-neon-green hover:text-neon-green"
            )}
          >
            [ {showStars ? "Space Mode: ON" : "Ignite Stars"} ]
          </button>
        </div>
      </div>

      {showStars && <FloatingStars />}

      {/* 2. Bento Box Skills Grid with Ambient Light */}
      <div className="relative w-full">
        {/* Ambient Glow behind Bento Box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-green-600/5 blur-[120px] rounded-full pointer-events-none" />
        <BentoGrid />
      </div>

      {/* 3. Interactive Use-Case Tabs */}
      <InteractiveTabs />

      {/* 4. Philosophy Section */}
      <section className="w-full max-w-5xl mx-auto my-24 px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
          Why Space Black?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-lg">Local-First Security</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your keys live in your .env. No cloud servers. No data leaks. Complete peace of mind.
            </p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <Database className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="font-bold text-white text-lg">Transparent Memory</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No heavy vector databases. Ghost's soul and memories live entirely within editable Markdown files.
            </p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-bold text-white text-lg">Lightning Fast</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Runs directly in your terminal with zero UI latency. Instant feedback and interaction.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Profile Section */}
      <ProfileSection />
    </main>
  );
}
