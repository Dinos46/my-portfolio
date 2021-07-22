import { useState } from 'react';
import { ProjCard } from './ProjCard';

export function MyProjects() {

    const [homie] = useState({
        name: 'homie',
        desc: 'Homie is an Airbnb clone made by a team of 3 junior developers,Daniel Sheetrit, Omri Madar and myself. Homie is a marketplace fo hosts and people all around the world who look for a place to stay.',
        techs: ['react', 'redux', 'nodejs', 'express', 'socket.io', 'mongodb'],
        url: 'https://homiebnb.herokuapp.com/#/',
        srcUrl: 'https://github.com/danielsheetrit/Homie',
        backUrl: 'https://github.com/Dinos46/Homie_backend'
    })

    const [misterDex] = useState({
        name: 'mister-dex',
        desc: 'Mister-dex is a pokemon pokadex clone with information about al kinds of pokemon.I use httpclient to fetch the data from the api. The user can search pokemon, edit pokemon and remove it.',
        techs: ['angular', 'ngrx', 'fetch api', 'typescript', 'rxjs'],
        url: 'https://Dinos46.github.io/Mister-Dex',
        srcUrl: 'https://github.com/Dinos46/Mister-Dex'
    })

    return (
        <section className="my-projs" id="my-projs">
            <h2>My recent projects</h2>
            <div className="card-container grid">
                <ProjCard proj={homie} />
                <ProjCard proj={misterDex} />
            </div>
        </section>
    )
}
