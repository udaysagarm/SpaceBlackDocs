import React from 'react';

export function AsciiCard({ title, children, href }: { title: string, children: React.ReactNode, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block relative font-mono text-sm p-6 hover:bg-neutral-900 transition-colors h-full">
            <div className="absolute inset-0 border border-neutral-800 group-hover:border-neon-green transition-colors" />

            {/* Decorative ASCII corners */}
            <div className="absolute top-0 left-0 -mt-1 -ml-1 text-neutral-600 group-hover:text-neon-green text-lg leading-none">+</div>
            <div className="absolute top-0 right-0 -mt-1 -mr-1 text-neutral-600 group-hover:text-neon-green text-lg leading-none">+</div>
            <div className="absolute bottom-0 left-0 -mb-1 -ml-1 text-neutral-600 group-hover:text-neon-green text-lg leading-none">+</div>
            <div className="absolute bottom-0 right-0 -mb-1 -mr-1 text-neutral-600 group-hover:text-neon-green text-lg leading-none">+</div>

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-neon-green mb-3 text-lg font-bold">[{title}]</h3>
                <div className="text-neutral-400 group-hover:text-neutral-200 flex-1 leading-relaxed">
                    {children}
                </div>
            </div>
        </a>
    );
}
