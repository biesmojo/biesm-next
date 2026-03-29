import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

export default function Blog() {
  return (
    <div>
        <h1>Blog</h1>
        <div>
            <h3 className={styles.red}>Ini adalah halaman blog. Pakai Blog.module.css</h3>
            Back to <Link href="/">Home</Link>
        </div>
    </div>
    );
}