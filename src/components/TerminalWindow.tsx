import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TerminalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    header?: string | React.ReactNode;
    className?: string;
}

export function TerminalWindow({ children, header = "bash", className, ...props }: TerminalWindowProps) {
    return (
        <div className={twMerge("w-full rounded-lg border border-neutral-800 bg-black/90 backdrop-blur-sm overflow-hidden", className)} {...props}>
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex-1 text-center text-xs text-neutral-500 font-mono flex justify-center items-center">
                    {header}
                </div>
            </div>
            <div className="p-4 font-mono text-sm text-neutral-300">
                {children}
            </div>
        </div>
    );
}
