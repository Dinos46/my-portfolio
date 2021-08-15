import { useState } from 'react';
import Image from 'next/image';

export function TechUse() {
    const [teches] = useState([
        'angular', 'redux', 'html5', 'css3', 'javascript', 'react', 'nodejs', 'mongodb', 'rxjs', 'express', 'sass', 'bootstrap', 'nextjs', 'typescript', 'socket.io'
    ]);

    return (
        <section className="tech flex">
            <h2>{`<Technologies I use>`}</h2>
            <article className="use-teches grid">
                {teches.map(tech => (
                    <div key={tech} className={`${tech}-card flex`}>
                        <h4>{tech}</h4>
                        <Image
                            layout="intrinsic"
                            width={50}
                            height={50}
                            src={`/${tech}.svg`} alt="porejct pic"
                        />
                    </div>
                ))}
            </article>
        </section>
    )
}
