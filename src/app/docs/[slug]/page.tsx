import { getDocBySlug, getDocSlugs } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { CodeBlock } from '@/components/CodeBlock';

import { DocsInstallTabs } from '@/components/DocsInstallTabs';

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

    const contentWithoutFrontmatter = doc.content.replace(/^---[\s\S]*?---\n/, '');

    return (
        <article className="prose prose-invert max-w-none 
            prose-headings:font-mono prose-headings:tracking-tight prose-headings:text-white
            prose-h1:text-4xl prose-h1:font-bold prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-neutral-500 prose-h1:mb-8
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-neutral-800 prose-h2:pb-2 prose-h2:mt-12
            prose-h3:text-xl prose-h3:text-neon-green
            prose-p:text-neutral-300 prose-p:leading-7
            prose-a:text-neon-green prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-code:text-neon-green prose-code:bg-neon-green/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-ul:my-6 prose-li:marker:text-neon-green
            prose-blockquote:border-l-4 prose-blockquote:border-neon-green prose-blockquote:bg-neutral-900/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-neutral-300
        ">
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 {...props} className="mb-8" />,
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+(?:-\w+)*)/.exec(className || '')
                        const lang = match ? match[1] : '';
                        const codeContent = String(children).replace(/\n$/, '');

                        if (!inline && lang === 'install-tabs') {
                            // Parse the content for [MAC] and [WINDOWS] delimiters
                            const macMatch = codeContent.match(/\[MAC\]([\s\S]*?)\[WINDOWS\]/);
                            const winMatch = codeContent.match(/\[WINDOWS\]([\s\S]*)/);

                            const macCode = macMatch ? macMatch[1].trim() : '';
                            const winCode = winMatch ? winMatch[1].trim() : '';

                            return <DocsInstallTabs macCode={macCode} windowsCode={winCode} />;
                        }

                        return !inline && match ? (
                            <CodeBlock language={lang} value={codeContent} />
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
