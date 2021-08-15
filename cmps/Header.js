import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
    const [state, usestate] = useState(false);

    const onOpenMenu = () => {
        if (window.innerWidth > 580) return;
        usestate(!state);
    };

    return (
        <header className="full main-container">
            <div onClick={onOpenMenu} className={`overlay-filter ${!state ? 'hide' : ''}`}></div>
            <nav className="nav-bar flex">
                <Link href="/">
                    <div className="logo">
                        <h1>{'<devDin>'}</h1>
                    </div>
                </Link>
                <div onClick={onOpenMenu} className={`hamburger flex`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${state ? 'open' : ''}`}>
                    <li onClick={onOpenMenu}>
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={onOpenMenu}>
                        <Link href="/contact">Contact_Me</Link>
                    </li>
                    <li onClick={onOpenMenu}>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
