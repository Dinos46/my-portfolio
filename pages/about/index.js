import { HeadInfo } from '../../cmps/HeadInfo';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { useState } from 'react';

export default function About() {
    const [gitUrl] = useState('https://github.com/Dinos46');
    const [linkedUrl] = useState('https://www.linkedin.com/in/din-ben-elisha-5b476a211/');
    const [mailUrl] = useState('dinos4620@gmail.com');

    return (
        <section className="about flex">
            <HeadInfo
                title={'About Page'}
                des={'this is the about page'}
                icon={'/favicon-32x32.png'}
            />
            <div className="img-container">
                <img src="/d2.jpg" alt="my picture"></img>
            </div>
            <div className="contact-info flex">
                <h2>Din Ben Elisha</h2>
                <h3>Front-end / Full stack developer</h3>
                <p>hey my name is Din and I am a junior web developer with a great thirst to knowledge.</p>
                <p>I graduated from coding academy. my expertise are front-end develop in REACT framework, great looking UI style with SCSS and a great ambition to evolve as a web developer </p>
                <ul className="flex">
                    <li><a href={`mailto:${mailUrl}`}>
                        <MailIcon />
                    </a></li>
                    <li><a href={linkedUrl}>
                        <LinkedInIcon />
                    </a></li>
                    <li><a href={gitUrl}>
                        <GitHubIcon />
                    </a></li>
                </ul>
            </div>
        </section>
    )
}
