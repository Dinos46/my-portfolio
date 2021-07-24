import Link from 'next/link';
import Image from 'next/image';

export function IntroSection() {
    return (
        <section className="introduction flex">
            <div className="img-container">
                <Image
                    priority
                    width={500}
                    height={400}
                    src="/d1.jpg"
                    alt="din's pic"
                />
            </div>
            <div className="info-container flex">
                <h2>Hi, I am </h2>
                <span>Din Ben Elisha</span>
                <h3>a Front-end / Full Stack junior <br />web developer</h3>
                <button className="btn">
                    <Link href="/contact">Hire me</Link>
                </button>
            </div>
        </section>
    )
}
