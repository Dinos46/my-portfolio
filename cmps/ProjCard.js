import Link from 'next/link';
import Image from 'next/image';

export function ProjCard({ name, desc }) {
    return (
        <Link href={`/details/proj?name=${name}`}>
            <div className="proj-card">
                {/* <div className="img-container"> */}
                <Image
                    layout="intrinsic"
                    width={670}
                    height={255}
                    src={`/${name}.jpg`} alt="porejct pic"
                />
                {/* </div> */}
                <h3>{name}</h3>
                <p>{desc}</p>
                <button className="btn">
                    <Link href={`/details/proj?name=${name}`}>more info...</Link>
                </button>
            </div>
        </Link>
    )
}
