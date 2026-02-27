"use client";
import { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { clsx } from 'clsx';

export function TerminalBlock({ command, children }: { command?: string, children?: React.ReactNode }) {
    const [copied, setCopied] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleCopy = async () => {
        if (copied) return;
        try {
            const textToCopy = command || contentRef.current?.innerText || "";
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    return (
        <div
            className={clsx(
                "group relative mt-6 flex flex-col rounded-xl border border-neutral-800 bg-black/60 shadow-2xl font-mono transition-all duration-300 overflow-hidden",
                copied ? "border-neon-green/50 shadow-neon-green/20" : "hover:border-neutral-700 hover:shadow-black/80"
            )}
        >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/80 border-b border-neutral-800/80">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                </div>
                <div className="text-xs text-neutral-500 font-sans tracking-wide user-select-none">Terminal</div>
                <button
                    onClick={handleCopy}
                    className="text-neutral-500 transition-all hover:text-neutral-300"
                    aria-label="Copy to clipboard"
                >
                    {copied ? (
                        <span className="flex items-center gap-1.5 text-neon-green text-xs font-sans">
                            <Check className="h-4 w-4" />
                            <span className="hidden sm:inline">Copied</span>
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity text-xs font-sans">
                            <Copy className="h-4 w-4" />
                            <span className="hidden sm:inline">Copy</span>
                        </span>
                    )}
                </button>
            </div>

            {/* Terminal Content */}
            <div className="relative px-6 py-5">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 to-transparent pointer-events-none" />
                <div ref={contentRef} className="relative z-10 flex-1 text-sm md:text-base text-neutral-300 whitespace-pre-wrap break-all overflow-x-auto selection:bg-neon-green/30 selection:text-white">
                    {children || (
                        <div className="flex items-center gap-3">
                            <span className="text-neon-green select-none opacity-80">~ $</span>
                            <span className="text-neutral-200">{command}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
