import fs from 'fs';
import path from 'path';

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export function getDocSlugs() {
    if (!fs.existsSync(docsDirectory)) return [];
    return fs.readdirSync(docsDirectory).filter(file => file.endsWith('.md'));
}

export function getDocBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(docsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return { slug: realSlug, content: fileContents };
}

export function getAllDocs() {
    const slugs = getDocSlugs();
    const docs = slugs.map((slug) => getDocBySlug(slug));
    return docs;
}
