import { DocsSidebar } from '@/components/DocsSidebar';
import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background relative selection:bg-neon-green/30 selection:text-neon-green">
            {/* Grid Pattern Background - Fixed to cover the entire docs area */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
                <div className="container flex h-16 items-center">
                    <div className="mr-4 hidden md:flex pl-6">
                        <Link className="mr-6 flex items-center space-x-2 font-bold text-lg text-neon-green font-mono tracking-tight hover:text-white transition-colors" href="/">
                            &gt; SPACE_BLACK
                        </Link>
                    </div>
                </div>
            </header>
            <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
                <DocsSidebar />
                <main className="relative py-8 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] min-h-[calc(100vh-4rem)]">
                    <div className="mx-auto w-full min-w-0 px-4 md:px-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
