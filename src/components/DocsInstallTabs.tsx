"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { clsx } from 'clsx';

interface DocsInstallTabsProps {
    macCode: string;
    windowsCode: string;
}

export function DocsInstallTabs({ macCode, windowsCode }: DocsInstallTabsProps) {
    const [os, setOs] = useState<"mac" | "windows">("mac");
    const [copied, setCopied] = useState(false);

    const currentCode = os === "mac" ? macCode : windowsCode;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(currentCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="not-prose my-6 rounded-lg overflow-hidden border border-neutral-800 bg-[#1e1e1e] shadow-2xl relative group">
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-3 border-b border-black/20">
                <div className="flex space-x-2 items-center">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* OS Toggle */}
                    <div className="flex bg-neutral-800/50 rounded p-0.5">
                        <button
                            onClick={() => setOs("mac")}
                            className={clsx(
                                "px-3 py-1 rounded text-xs font-medium transition-all",
                                os === "mac"
                                    ? "bg-neutral-700 text-neon-green shadow-sm"
                                    : "text-neutral-400 hover:text-neutral-200"
                            )}
                        >
                            Mac/Linux
                        </button>
                        <button
                            onClick={() => setOs("windows")}
                            className={clsx(
                                "px-3 py-1 rounded text-xs font-medium transition-all",
                                os === "windows"
                                    ? "bg-neutral-700 text-neon-green shadow-sm"
                                    : "text-neutral-400 hover:text-neutral-200"
                            )}
                        >
                            Windows
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
                    title="Copy code"
                >
                    {copied ? <Check size={14} className="text-neon-green" /> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <SyntaxHighlighter
                    style={dracula}
                    language="bash"
                    PreTag="div"
                    customStyle={{ background: 'transparent', margin: 0, padding: 0 }}
                    codeTagProps={{ style: { fontFamily: 'var(--font-mono)', fontSize: '0.875rem' } }}
                >
                    {currentCode}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
