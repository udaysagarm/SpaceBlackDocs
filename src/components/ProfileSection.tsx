import { Github, Linkedin, Instagram, Globe } from 'lucide-react';
import { AsciiCard } from './AsciiCard';

export function ProfileSection() {
    return (
        <section className="w-full max-w-4xl mx-auto mt-32 mb-16 px-4">
            <div className="border border-neutral-800 bg-black/40 backdrop-blur rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-neutral-600" />
                    <div className="font-mono text-xs text-neutral-500">identity.json</div>
                </div>

                <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
                        {/* Identity Info */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white font-mono tracking-tight">
                                    <span className="text-neon-green mr-2">&gt;</span>
                                    Uday
                                </h2>
                                <p className="text-neutral-400 font-mono mt-2">Creator of Space Black</p>
                            </div>

                            <div className="space-y-2 font-mono text-sm text-neutral-300">
                                <p><span className="text-neutral-500">role:</span> "CS Master's Student"</p>
                                <p><span className="text-neutral-500">specialization:</span> "Intelligent Systems"</p>
                                <p><span className="text-neutral-500">status:</span> <span className="text-neon-green animate-pulse">● Online</span></p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="https://github.com/udaysagarm" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                                    @udaysagarm
                                </a>
                                <SocialLink href="https://www.linkedin.com/in/udaymeka/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                                <SocialLink href="https://instagram.com/imsagaruday" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                                <SocialLink href="https://www.udaysagar.com" icon={<Globe className="w-5 h-5" />} label="Website" />
                            </div>
                        </div>

                        {/* ASCII Decoration or Avatar placeholder */}
                        <div className="hidden md:block w-32 h-32 border border-neutral-800 rounded-lg flex items-center justify-center bg-neutral-900/30">
                            <span className="text-4xl text-neutral-700 font-mono">U</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neon-green hover:border-neon-green/50 transition-all group"
        >
            {icon}
            <span className="text-sm font-mono">{label}</span>
        </a>
    )
}
