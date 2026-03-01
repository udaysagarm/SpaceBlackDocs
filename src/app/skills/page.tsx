import Link from "next/link";
import {
    ArrowLeft, Terminal, Lock, Search, Folder, Clock, Brain, Cloud
} from "lucide-react";
import { SiGithub, SiStripe, SiPaypal, SiGoogle, SiTelegram, SiDiscord, SiApple } from "react-icons/si";
import { PlaywrightLogo } from "../../components/icons/PlaywrightLogo";
import { BraveLogo } from "../../components/icons/BraveLogo";
import { DuckDuckGoLogo } from "../../components/icons/DuckDuckGoLogo";
import { SlackLogo } from "../../components/icons/SlackLogo";

export default function SkillsPage() {
    const categories = [
        {
            title: "Developer & Founder Platforms",
            description: "These are the heavy-hitting integrations that make Space Black a true OS rather than just a chatbot.",
            skills: [
                {
                    name: "GitHub Gateway",
                    icon: <SiGithub className="w-6 h-6 text-white" />,
                    description: "Natively read repository issues, create branches, and push commits fully autonomously.",
                    config: "Requires GITHUB_TOKEN in .env",
                    docs: "/docs/skills#github"
                },
                {
                    name: "Stripe Billing",
                    icon: <SiStripe className="w-6 h-6 text-[#635BFF]" />,
                    description: "Manage customers, check balances, list prices, and generate checkout session links directly from the CLI.",
                    config: "Requires STRIPE_SECRET_KEY in .env",
                    docs: "/docs/skills#stripe"
                },
                {
                    name: "PayPal Integration",
                    icon: <SiPaypal className="w-6 h-6 text-[#00457C]" />,
                    description: "Create and manage invoices, send payouts, and handle billing agreements.",
                    config: "Requires PAYPAL_CLIENT_ID and SECRET",
                    docs: "/docs/skills#paypal"
                },
                {
                    name: "Google Workspace",
                    icon: <SiGoogle className="w-5 h-5 text-white" />,
                    description: "Deep OAuth2 integration to read Gmail, manage Google Calendar, search Google Drive, and edit Docs/Sheets.",
                    config: "Requires Google OAuth Credentials",
                    docs: "/docs/skills#google"
                }
            ]
        },
        {
            title: "Communication & Remote Control",
            description: "Tools for talking to Ghost when you are away from your terminal.",
            skills: [
                {
                    name: "Telegram Gateway",
                    icon: <SiTelegram className="w-6 h-6 text-[#26A5E4]" />,
                    description: "A secure, allow-listed bot that lets you message your background Daemon to execute tasks remotely from your phone.",
                    config: "Requires Telegram Bot Token",
                    docs: "/docs/skills#telegram"
                },
                {
                    name: "Discord Community Manager",
                    icon: <SiDiscord className="w-6 h-6 text-[#5865F2]" />,
                    description: "Run a background bot to summarize channels, send DMs, and manage server roles.",
                    config: "Requires Discord Bot Token",
                    docs: "/docs/skills#discord"
                },
                {
                    name: "Slack Integration",
                    icon: <SlackLogo className="w-6 h-6" />,
                    description: "Read messages, post updates, and respond to mentions in your Slack workspaces.",
                    config: "Requires Slack Bot Token",
                    docs: "/docs/skills#slack",
                    badge: "beta"
                }
            ]
        },
        {
            title: "Autonomous Web & Research",
            description: "Engines that allow Ghost to parse, navigate, and search the open web.",
            skills: [
                {
                    name: "Agentic Browsing Engine",
                    icon: <PlaywrightLogo className="w-6 h-6" />,
                    description: "Uses the Chrome DevTools Protocol (CDP) and Playwright to see and interact with modern, dynamic websites.",
                    config: "Built-in (Requires Playwright)",
                    docs: "/docs/skills#browsing"
                },
                {
                    name: "Secure Vault",
                    icon: <Lock className="w-6 h-6 text-emerald-400" />,
                    description: "Uses your OS's native keychain to securely store and retrieve login credentials for autonomous web sessions.",
                    config: "Built-in",
                    docs: "/docs/skills#vault",
                    badge: "beta"
                },
                {
                    name: "Web Search Engine",
                    icon: [
                        <BraveLogo key="brave" className="w-8 h-8" />,
                        <DuckDuckGoLogo key="ddg" className="w-8 h-8" />
                    ],
                    description: "Quick information retrieval using the Brave Search or DuckDuckGo APIs.",
                    config: "Requires Search API Key",
                    docs: "/docs/skills#search"
                }
            ]
        },
        {
            title: "Local OS & Infrastructure",
            description: "Core modules to control your local development environment.",
            skills: [
                {
                    name: "macOS Native Control",
                    icon: <SiApple className="w-6 h-6 text-neutral-300" />,
                    description: "Uses secure AppleScript to natively control Apple Mail, Calendar, Notes, Reminders, Finder, and system settings.",
                    config: "Built-in (macOS only)",
                    docs: "/docs/skills#macos"
                },
                {
                    name: "File System Engine",
                    icon: <Folder className="w-6 h-6 text-sky-400" />,
                    description: "Direct, safe access to read, write, and list directories within your local environment.",
                    config: "Built-in",
                    docs: "/docs/skills#filesystem"
                },
                {
                    name: "Terminal Command Execution",
                    icon: <Terminal className="w-6 h-6 text-neon-green" />,
                    description: "Safely execute non-interactive shell commands directly on the host machine.",
                    config: "Built-in",
                    docs: "/docs/skills#terminal"
                }
            ]
        },
        {
            title: "The \"Brain\" Utilities",
            description: "Background processing and core memory capabilities.",
            skills: [
                {
                    name: "Internal Scheduler",
                    icon: <Clock className="w-6 h-6 text-purple-400" />,
                    description: "A custom cron-like queue that allows Ghost to execute delayed or recurring tasks.",
                    config: "Built-in (SCHEDULE.json)",
                    docs: "/docs/skills#scheduler"
                },
                {
                    name: "Memory & Soul Updater",
                    icon: <Brain className="w-6 h-6 text-pink-400" />,
                    description: "Tools that allow Ghost to autonomously rewrite its system prompt, update your profile, and log long-term semantic memories.",
                    config: "Built-in (SOUL.md / USER.md)",
                    docs: "/docs/skills#memory"
                },
                {
                    name: "OpenWeather API",
                    icon: <Cloud className="w-6 h-6 text-blue-300" />,
                    description: "Real-time localized weather fetching built directly into the core tools.",
                    config: "Requires OpenWeather API Key",
                    docs: "/docs/skills#openweather"
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-20">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-sm font-mono text-neutral-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        cd ..
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="text-neon-green mr-2">$</span>ls ./plugins
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl">
                        Space Black&apos;s power comes from its modular architecture. Here are the official integrations that elevate Ghost from a simple chatbot to a full-blown autonomous operating system.
                    </p>
                </div>

                <div className="space-y-16 pb-20">
                    {categories.map((category) => (
                        <div key={category.title} className="space-y-6">
                            <div className="border-b border-neutral-800 pb-2">
                                <h2 className="text-2xl font-bold text-white tracking-tight">{category.title}</h2>
                                <p className="text-neutral-500 mt-2 text-sm">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col p-6 rounded-xl border border-white/10 bg-neutral-950 hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_15px_-3px_var(--neon-green)] transition-all duration-300 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        {/* Optional Badge (e.g., "beta") */}
                                        {skill.badge && (
                                            <div className="absolute top-4 right-4">
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-neon-green bg-neon-green/10 border border-neon-green/20 px-2 py-1 rounded-full">
                                                    {skill.badge}
                                                </span>
                                            </div>
                                        )}

                                        <div className="relative z-10 flex-1 flex flex-col">
                                            {/* Support for multiple icons or single icon */}
                                            {Array.isArray(skill.icon) ? (
                                                <div className="flex gap-2 mb-5">
                                                    {skill.icon.map((iconElement, index) => (
                                                        <div key={index} className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                                            {iconElement}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-white/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                                                    {skill.icon}
                                                </div>
                                            )}
                                            <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                                            <p className="text-neutral-400 text-sm mb-6 flex-1">{skill.description}</p>

                                            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                                                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1.5 rounded inline-block w-fit">
                                                    {skill.config}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
