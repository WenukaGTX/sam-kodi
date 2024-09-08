import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// Directory where the Markdown files are stored
const postsDirectory = path.join(process.cwd(), 'src/blogs/posts');

export function getPostSlugs() {
    // Return the slugs of all the markdown files (e.g., 'first-blog-post')
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => filename.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
    // Read the markdown file by its slug
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the frontmatter and content
    const { data, content } = matter(fileContents);

    // Convert Markdown content to HTML
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        frontmatter: data,
        contentHtml,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

// Function to get all posts
export function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);
    const allPosts = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            frontmatter: data
        };
    });

    return allPosts;
}