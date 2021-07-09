import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Details() {
    const router = useRouter()
    const [homie] = useState({
        name: 'homie',
        desc: 'homie is an airBnB clone made by a team of 3 junior developers,Daniel Sheetrit, Omri Madar and myself. Homie is a marketplace fo hosts and people all around the world who look for a place to stay.',
        tecs: ['react', 'redux', 'nodejs', 'express', 'socket.io', 'mongodb'],
        url: 'https://homiebnb.herokuapp.com/#/',
        srcUrl: 'https://github.com/danielsheetrit/Homie',
        backUrl: 'https://github.com/Dinos46/Homie_backend'
    })

    const [dex] = useState({
        name: 'mister-dex',
        desc: 'mister-dex is a pokemon pokadex clone with information about al kinds of pokemon.',
        tecs: ['angular', 'ngrx', 'fetch api', 'typescript'],
        url: '',
        srcUrl: ''
    })

    function setDetails() {
        let data;
        console.log(router.query)
        switch (router.query.name) {
            case 'homie':
                return data = homie
            case 'mister-dex':
                return data = dex
        }
        console.log(data)
        return data
    }

    const projDetails = setDetails()
    console.log(projDetails)

    if (!projDetails) return <h2>Loading.....</h2>
    return (
        <section className="details flex">
            <h2>{projDetails.name}</h2>
            <div className="img-container">
                <Image src={`/${projDetails.name}.jpg`}></Image>
            </div>
            <p>
                {projDetails.desc}
            </p>
            <div className="link-container flex">
                <a className="btn" href={projDetails.url}>{`go to ${projDetails.name}`}</a>
                <a className="btn" href={projDetails.srcUrl}>{`${projDetails.name} code source`}</a>
                {projDetails.backUrl && <a className="btn" href={projDetails.backUrl}>{`${projDetails.name} backend code source`}</a>}
            </div>
            <h3>technologies</h3>
            <div className="tec flex">
                {projDetails.tecs.map(tec => <span key={tec}>{tec}</span>)}
            </div>
        </section>
    )
}
