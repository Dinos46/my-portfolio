import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { useState } from 'react';

export function SocialIcons() {
    const [gitUrl] = useState('https://github.com/Dinos46');
    const [linkedUrl] = useState('https://www.linkedin.com/in/din-ben-elisha-5b476a211/');
    const [mailUrl] = useState('dinos4620@gmail.com');

    return (
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
    )
}
