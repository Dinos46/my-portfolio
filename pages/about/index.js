import { HeadInfo } from '../../cmps/HeadInfo';
import { SocialIcons } from '../../cmps/SocialIcons';
import Image from 'next/image';


export default function About() {


    return (
        <section className="about flex">
            <HeadInfo
                title={'About Page'}
                des={'this is the about page'}
                icon={'/favicon-32x32.png'}
            />
            <div className="img-container">
                <Image layout="fill" src="/d2.jpg" alt="my picture" />
            </div>
            <div className="contact-info flex">
                <h2>Din Ben Elisha</h2>
                <h3>Front-end / Full stack developer</h3>
                <p>hey my name is Din and I am a junior web developer with a great thirst to knowledge.</p>
                <p>I graduated from coding academy. my expertise are front-end develop in REACT framework, great looking UI style with SCSS and a great ambition to evolve as a web developer </p>
                <SocialIcons />
            </div>
        </section>
    )
}
