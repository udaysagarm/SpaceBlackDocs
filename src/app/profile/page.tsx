import { AsciiCard } from '@/components/AsciiCard';
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-4xl w-full space-y-16 z-10">
                <header className="space-y-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter">
                        <span className="text-neon-green">User:</span> Uday
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 font-mono">
                        CS Master's Student & Creator of <br className="md:hidden" />
                        <span className="text-cyber-purple"> 'Moth AI'</span> / <span className="text-cyber-purple">'Space Black'</span>
                    </p>
                    <div className="inline-block border border-dashed border-neutral-700 p-6 rounded-lg bg-black/50 backdrop-blur mt-4">
                        <p className="font-mono text-neutral-300 italic">
                            "Building intelligent systems that live in the shell."
                        </p>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AsciiCard title="GitHub" href="https://github.com/udaysagar">
                        <span className="text-neutral-500">handle:</span> @udaysagar <br />
                        <span className="text-neon-green">&gt;</span> 50+ Repositories <br />
                        <span className="text-neon-green">&gt;</span> Open Source Contributor
                    </AsciiCard>
                    <AsciiCard title="LinkedIn" href="#">
                        <span className="text-neutral-500">handle:</span> /in/udaysagar <br />
                        <span className="text-neon-green">&gt;</span> Professional Network <br />
                        <span className="text-neon-green">&gt;</span> Connect
                    </AsciiCard>
                    <AsciiCard title="Twitter/X" href="#">
                        <span className="text-neutral-500">handle:</span> @uday_sagar <br />
                        <span className="text-neon-green">&gt;</span> Tech Thoughts <br />
                        <span className="text-neon-green">&gt;</span> AI Research
                    </AsciiCard>
                    <AsciiCard title="Instagram" href="#">
                        <span className="text-neutral-500">handle:</span> @uday.visuals <br />
                        <span className="text-neon-green">&gt;</span> Photography <br />
                        <span className="text-neon-green">&gt;</span> Life in Frames
                    </AsciiCard>
                </section>

                <div className="text-center pt-8">
                    <Link href="/" className="text-neutral-500 hover:text-neon-green font-mono underline decoration-dotted transition-colors">
                        &lt; Return to Terminal
                    </Link>
                </div>
            </div>
        </main>
    );
}
