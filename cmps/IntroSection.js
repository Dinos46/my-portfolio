import Link from 'next/link';
import Image from 'next/image';

export function IntroSection() {
    return (
        <section className="introduction flex">
            <div className="info-container flex">
                <h2>Hey, I am </h2>
                <span>Din Ben Elisha</span>
                <h3>a Front-end / Full Stack junior <br />web developer</h3>
                <button className="btn">
                    <Link href="#my-projs">My Latest Work</Link>
                </button>
            </div>
            <div className="img-container">
                <Image layout="fill" src="/d1.jpg" alt="din's pic" />
            </div>
        </section>
    )
}
