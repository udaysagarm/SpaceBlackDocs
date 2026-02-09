import { getDocBySlug, getDocSlugs } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const slugs = getDocSlugs();
    return slugs.map((file) => ({
        slug: file.replace(/\.md$/, ''),
    }));
}

export default async function DocPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;
    const doc = getDocBySlug(slug);

    if (!doc) {
        notFound();
    }

    // Remove frontmatter-like content if present (simple hack, or use gray-matter if installed, but I didn't install it. 
    // I will assume content might have frontmatter blocks `---` and just hide them via CSS or regex remove them here.
    // The user didn't ask for frontmatter handling explicitly for metadata, just "use react-markdown".
    // I'll strip simple frontmatter if it exists to avoid rendering it as HRs.
    const contentWithoutFrontmatter = doc.content.replace(/^---[\s\S]*?---\n/, '');

    return (
        <article className="prose prose-invert prose-neutral max-w-none 
        prose-headings:text-neon-green 
        prose-h1:font-mono prose-h1:text-4xl prose-h1:tracking-tight
        prose-a:text-cyber-purple hover:prose-a:text-neon-green 
        prose-code:text-neon-green prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#282a36] prose-pre:border prose-pre:border-neutral-800 prose-pre:p-0
        prose-img:rounded-lg prose-img:border prose-img:border-neutral-800
    ">
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <div className="terminal-code-block rounded-md overflow-hidden bg-[#282a36]">
                                <div className="flex bg-[#1d1f27] px-4 py-1 text-xs text-neutral-500 border-b border-neutral-700 justify-between items-center">
                                    <span>{match[1]}</span>
                                </div>
                                <SyntaxHighlighter
                                    {...props}
                                    style={dracula}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{ background: 'transparent', margin: 0, padding: '1rem' }}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            </div>
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {contentWithoutFrontmatter || doc.content}
            </ReactMarkdown>
        </article>
    );
}
