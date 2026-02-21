"use client";

import { useState } from "react";
import clsx from "clsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Tab = {
    id: string;
    label: string;
    code: string;
    language: string;
};

const TABS: Tab[] = [
    {
        id: "research",
        label: "Research",
        language: "python",
        code: `# Ghost uses a Headless Browser to scrape and parse data
ghost.browse("https://news.ycombinator.com")

agent.extract({
    target: "front_page_items",
    schema: {
        "title": "string",
        "points": "number",
        "link": "string"
    }
})

Output: Successfully extracted 30 items.`,
    },
    {
        id: "infrastructure",
        label: "Infrastructure",
        language: "bash",
        code: `# Ghost executes safe shell commands directly
$ ghost "Deploy the latest changes to staging"

> running: \`git pull origin main\`
> running: \`npm install\`
> running: \`npm run build\`
> running: \`pm2 restart spaceblack-app\`

✔ Deployment complete in 42s.`,
    },
    {
        id: "automation",
        label: "Automation",
        language: "json",
        code: `// SCHEDULE.json
// Background cron jobs managed by Ghost
{
  "jobs": [
    {
      "name": "Daily ArXiv Digest",
      "cron": "0 8 * * *",
      "action": "ghost analyze 'latest AI papers' && email to:me"
    },
    {
      "name": "Database Backup",
      "cron": "0 0 * * 0",
      "action": "pg_dump -U admin mydb > backup.sql"
    }
  ]
}`,
    },
];

export function InteractiveTabs() {
    const [activeTab, setActiveTab] = useState<string>("research");

    const currentTab = TABS.find((t) => t.id === activeTab);

    return (
        <section className="w-full max-w-4xl mx-auto my-24 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                    What can <span className="text-neon-green">Ghost</span> do?
                </h2>
                <p className="text-neutral-400">
                    Switch tabs to see how Ghost handles different workflows.
                </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
                {/* Tab Header */}
                <div className="flex border-b border-neutral-800 bg-neutral-950/50 overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={clsx(
                                "px-6 py-4 text-sm font-semibold transition-all border-b-2 whitespace-nowrap",
                                activeTab === tab.id
                                    ? "border-neon-green text-neon-green bg-neutral-900"
                                    : "border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Code Window with macOS Header */}
                <div className="bg-[#0d1117] rounded-b-xl overflow-hidden">
                    {/* macOS Traffic Lights Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        <div className="ml-2 text-xs font-mono text-[#8b949e]">
                            bash — ghost {currentTab?.id}
                        </div>
                    </div>

                    <div className="p-4 overflow-x-auto text-sm">
                        {currentTab && (
                            <SyntaxHighlighter
                                language={currentTab.language}
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    background: 'transparent',
                                    padding: '0.5rem',
                                }}
                            >
                                {currentTab.code}
                            </SyntaxHighlighter>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
