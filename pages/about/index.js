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
                <Image
                    // layout="fill"
                    width={400}
                    height={400}
                    src="/d2.jpg"
                    alt="my picture"
                />
            </div>
            <div className="contact-info flex">
                <h2>Din Ben Elisha</h2>
                <h3>Front-end / Full stack developer</h3>
                <p>Hello, my name is Din and I am a junior web developer with a great ambition for solving problems.</p>
                <p>{`I graduated from coding academy's bootcamp, with a great passion to evolve as a web developer. My expertise are front-end development using React with state management Redux,
                    backend development using Nodejs, Express and Mongodb for the database.`}</p>
                <a className="btn" href="/Din Ben Elisha CV.pdf" download="Din Ben Elisha CV.pdf">Download my cv</a>
                {/* <SocialIcons /> */}
            </div>
        </section>
    )
}
