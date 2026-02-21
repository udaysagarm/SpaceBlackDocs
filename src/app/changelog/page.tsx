import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ChangelogPage() {
    const filePath = path.join(process.cwd(), "src/content/docs/changelog.md");
    const markdownFiles = fs.readFileSync(filePath, "utf-8");

    return (
        <main className="min-h-screen bg-background text-foreground p-4 md:p-8 pt-20">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-sm font-mono text-neutral-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        cd ..
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                        <span className="text-neon-green mr-2">$</span>tail -f changelog
                    </h1>
                </div>

                <div className="prose prose-invert prose-neutral prose-a:text-neon-green prose-a:no-underline hover:prose-a:underline max-w-none">
                    <ReactMarkdown>{markdownFiles}</ReactMarkdown>
                </div>
            </div>
        </main>
    );
}
