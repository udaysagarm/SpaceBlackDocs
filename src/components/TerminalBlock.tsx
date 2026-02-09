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
                "group relative mt-6 flex flex-col rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 py-4 font-mono transition-all duration-300 hover:bg-neutral-900",
                copied ? "border-neon-green/50 bg-neon-green/10" : "hover:border-neutral-700"
            )}
        >
            <div ref={contentRef} className="flex-1 text-sm md:text-base text-neutral-300 whitespace-pre-wrap break-all overflow-x-auto">
                {children || (
                    <div className="flex items-center gap-3">
                        <span className="text-neon-green select-none">$</span>
                        <span>{command}</span>
                    </div>
                )}
            </div>

            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 text-neutral-500 transition-colors hover:text-neutral-300"
                aria-label="Copy to clipboard"
            >
                {copied ? (
                    <span className="flex items-center gap-2 text-neon-green">
                        <span className="text-xs hidden sm:inline">Copied!</span>
                        <Check className="h-5 w-5" />
                    </span>
                ) : (
                    <Copy className="h-5 w-5" />
                )}
            </button>
        </div>
    );
}
