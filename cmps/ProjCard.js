import Link from 'next/link';

export function ProjCard({ name, desc }) {
    return (
        <Link href={`/details/proj?name=${name}`}>
            <div className="proj-card">
                <div className="img-container">
                    <img src={`/${name}.jpg`} alt="porejct pic"></img>
                </div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <button className="btn">
                    <Link href={`/details/proj?name=${name}`}>more info...</Link>
                </button>
            </div>
        </Link>
    )
}
