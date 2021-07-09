import { ProjCard } from './ProjCard';

export function MyProjects() {
    return (
        <section className="my-projs" id="my-projs">
            <h2>My recent projects</h2>
            <div className="card-container flex">
                <ProjCard name={'homie'} desc={'airBnB clone, marketplace for hosting.'} />
                <ProjCard name={'mister-dex'} desc={'a mini pokadex for pokemon.'} />
            </div>
        </section>
    )
}
