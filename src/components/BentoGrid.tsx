import { Github, CreditCard, MessageSquare, Monitor, Mail, Globe, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export function BentoGrid() {
    return (
        <>
            <section className="w-full max-w-5xl mx-auto my-24 px-4">
                <div className="mb-12 text-center md:text-left space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
                        Plug into Everything. <span className="text-neon-green">Locally.</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl">
                        Space Black's modular architecture lets you integrate your tools as local
                        skills. No third-party servers storing your tokens.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {/* Card 1 (Large - Github) */}
                    <div className="md:col-span-2 md:row-span-2 rounded-2xl bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Autonomous Developer</h3>
                            <p className="text-neutral-400 text-lg max-w-md">
                                Let Ghost read issues, branch out, and push native commits fully autonomously.
                            </p>
                        </div>
                        <div className="relative z-10 mt-6 font-mono text-sm text-neutral-500 bg-neutral-900/50 p-4 rounded-lg border border-white/10">
                            $ ghost "Fix issue #42 and open a PR"
                        </div>
                    </div>

                    {/* Card 2 (Medium - Stripe) */}
                    <div className="rounded-2xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <CreditCard className="w-5 h-5 text-[#635BFF]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Indie Hacker OS</h3>
                            <p className="text-neutral-400 text-sm">
                                Check balances and create checkout sessions directly from the CLI.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 (Medium - Discord) */}
                    <div className="rounded-2xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-between group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <MessageSquare className="w-5 h-5 text-[#5865F2]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Community Manager</h3>
                            <p className="text-neutral-400 text-sm">
                                Run a background bot that reads channels and sends automated DMs.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 (Small - Apple) */}
                    <div className="rounded-2xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-center items-center text-center group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                            <Monitor className="w-8 h-8 text-neutral-300 mb-3 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
                            <h3 className="font-bold text-white text-sm">macOS Native</h3>
                            <p className="text-neutral-500 text-xs mt-1">Control your Mac apps.</p>
                        </div>
                    </div>

                    {/* Card 5 (Small - Google Workspace) */}
                    <div className="rounded-2xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-center items-center text-center group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                            <Mail className="w-8 h-8 text-blue-400 mb-3 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
                            <h3 className="font-bold text-white text-sm">Google Workspace</h3>
                            <p className="text-neutral-500 text-xs mt-1">Read Gmail & Docs.</p>
                        </div>
                    </div>

                    {/* Card 6 (Small - Agentic Browsing) */}
                    <div className="rounded-2xl bg-neutral-950 border border-white/10 p-6 flex flex-col justify-center items-center text-center group hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <Globe className="w-8 h-8 text-amber-500 mb-3 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
                            <h3 className="font-bold text-white text-sm">Agentic Browsing</h3>
                            <p className="text-neutral-500 text-xs mt-1">Ghost uses Playwright to navigate apps.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Link to all integrations */}
            <div className="flex justify-center pb-24 relative z-10">
                <Link
                    href="/skills"
                    className="group flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-black/50 px-8 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_15px_-3px_var(--neon-green)] backdrop-blur-sm"
                >
                    [ View All Integrations ]
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </>
    );
}
