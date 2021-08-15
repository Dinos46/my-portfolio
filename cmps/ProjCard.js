import Image from 'next/image';

export function ProjCard({ proj: { name, desc, url, srcUrl, backUrl, techs } }) {

    return (
        <div className="proj-card">
            <div className="img-container">
                <Image
                    priority
                    width={670}
                    height={255}
                    src={`/${name}.jpg`} alt="porejct pic"
                />
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="link-container">
                <a href={url}>{`Visit ${name}`}</a>
                <a href={srcUrl}>{`${name}'s src code`}</a>
                {backUrl ? <a href={url}>{`${name}'s backend src code`}</a> : <br />}
            </div>

            <div className="tec flex">
                {techs.map(tec => (
                    <Image
                        key={tec}
                        layout="intrinsic"
                        width={30}
                        height={30}
                        src={`/${tec}.svg`} alt="porejct pic"
                    />
                ))}
            </div>
        </div>
    )
}
