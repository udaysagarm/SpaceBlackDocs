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
        title: 'Core Concepts',
        items: [
            { title: 'Architecture', href: '/docs/architecture' },
        ],
    },
];

export function DocsSidebar() {
    return (
        <nav className="w-64 border-r border-neutral-800 bg-black/50 p-6 hidden md:block h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <div className="space-y-8">
                {navItems.map((section) => (
                    <div key={section.title}>
                        <h3 className="mb-3 text-sm font-semibold text-neon-green uppercase tracking-wider">
                            {section.title}
                        </h3>
                        <ul className="space-y-2">
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
    );
}

function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(
                "block text-sm transition-colors break-words",
                isActive ? "text-white font-medium pl-2 border-l-2 border-neon-green" : "text-neutral-500 hover:text-neutral-300"
            )}
        >
            {children}
        </Link>
    )
}
