import React from 'react'
import emailjs from 'emailjs-com';
import Image from 'next/image';
// import { Modal } from '@material-ui/core';

export default function index() {
    const onSubmitform = (ev) => {
        ev.preventDefault();
        const { target } = ev;
        emailjs.sendForm('service_72x6tif', 'template_9ldv4nc', target, 'user_hIyXPbiX93TTX2ylP54FC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        target.reset();
    }

    return (
        <section className="contact-me flex">
            <div className="img-container">
                <Image
                    src="/hire.png"
                    width={500}
                    height={500}
                />
            </div>
            <form onSubmit={onSubmitform} className="flex">
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message"></textarea>
                <button className="btn">Send</button>
            </form>
        </section>
    )
}
