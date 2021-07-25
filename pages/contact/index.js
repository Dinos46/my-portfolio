import emailjs from 'emailjs-com';
import Image from 'next/image';
import { useState } from 'react';

export default function index() {
    const [status, setstatus] = useState('');

    const onSubmitform = (ev) => {
        ev.preventDefault();
        const { target } = ev;
        emailjs.sendForm('service_72x6tif', 'template_9ldv4nc', target, 'user_hIyXPbiX93TTX2ylP54FC')
            .then((result) => {
                setstatus('success')
                setTimeout(() => {
                    setstatus('')
                }, 5000)
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
                    width={450}
                    height={450}
                />
            </div>
            <form onSubmit={onSubmitform} className="flex">
                <div className={`status ${status}`}>Thank you!</div>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="text" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message"></textarea>
                <button className="btn">Send</button>
            </form>
        </section>
    )
}
