import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/contents');

export function getSortedPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
  };
}

// Fungsi untuk mendapatkan semua slug dari postingan, untuk pre-rendering dinamis
export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((filename) => ({
    params: { ssss: filename.replace(/\.md$/, "") }, // namanya jadi slug tanpa ekstensi .md, contoh: "my-post.md" jadi "my-post"
  }));
}