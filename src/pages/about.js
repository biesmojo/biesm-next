import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Ini adalah halaman tentang kami.</p>
            <br />
            <div>
                Back to <Link href="/">Home</Link>
            </div>
        </div>
    );
}