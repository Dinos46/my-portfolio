import Link from 'next/link';

export default function index() {
    return (
        <div>
            <h2>Wrong page url........</h2>
            <p>go back to the <Link href="/"><span className="err"> Home Page</span></Link></p>
        </div>
    )
}
