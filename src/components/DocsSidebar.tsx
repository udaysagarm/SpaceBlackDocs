"use client";
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        title: 'Introduction',
        items: [
            { title: 'Overview', href: '/docs/introduction' },
        ],
    },
    {
        title: 'Getting Started',
        items: [
            { title: 'Installation', href: '/docs/installation' },
            { title: 'Usage Guide', href: '/docs/usage' },
        ],
    },
    {
        title: 'Features',
        items: [
            { title: 'Core Tools', href: '/docs/tools' },
            { title: 'Modular Skills', href: '/docs/skills' },
        ],
    },
    {
        title: 'Internals',
        items: [
            { title: 'Architecture', href: '/docs/architecture' },
            { title: 'Memory System', href: '/docs/memory' },
            { title: 'Security & Privacy', href: '/docs/security' },
        ],
    },
    {
        title: 'Project Info',
        items: [
            { title: 'Contributing', href: '/docs/contributing' },
            { title: 'Changelog', href: '/docs/changelog' },
        ],
    },
];

export function DocsSidebar() {
    return (
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <nav className="h-full py-6 pr-6 lg:py-8" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                <div className="w-full h-full overflow-y-auto space-y-8 pr-2 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                    {navItems.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-2 px-3 text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                                {section.title}
                            </h3>
                            <ul className="space-y-1">
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <SidebarLink href={item.href}>{item.title}</SidebarLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
        </aside>
    );
}

function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(
                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                isActive
                    ? "bg-neon-green/10 text-neon-green shadow-[0_0_10px_-5px_var(--neon-green)]"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
            )}
        >
            <span>{children}</span>
            {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_8px_var(--neon-green)]" />
            )}
        </Link>
    )
}
