import { getAllPostSlugs, getPostBySlug } from "@/utils";
import { remark } from "remark";
import remarkHtml from "remark-html";

export async function getStaticPaths() {
    const post = getAllPostSlugs(); // Ambil semua slug dari postingan

    return {
        paths: post,
        fallback: false, // Jika slug tidak ditemukan, tampilkan halaman 404
    };
}

export async function getStaticProps({ params }) {
    const { ssss } = params; // Ambil nilai slug dari parameter URL
    const post = getPostBySlug(ssss);
    
    const processedContent = await remark().use(remarkHtml).process(post.content);
    const contentHtml = processedContent.toString();
    
    return {
        props: {
            post: {
                ...post,
                content: contentHtml, // Kirim konten yang sudah diproses sebagai HTML
            },
        },
    };
}

export default function Custom({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <p>This is a custom page with dynamic routing.</p>
        </div>
    );
}