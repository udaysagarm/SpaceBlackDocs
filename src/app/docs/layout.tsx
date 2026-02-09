import { DocsSidebar } from '@/components/DocsSidebar';
import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex pl-6">
                        <Link className="mr-6 flex items-center space-x-2 font-bold text-neon-green font-mono" href="/">
                            &gt; SPACE_BLACK
                        </Link>
                    </div>
                </div>
            </header>
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <DocsSidebar />
                <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                    <div className="mx-auto w-full min-w-0 px-4 md:px-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
