import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const contactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: 'Email',
    link: 'mailto:GK2tM@example.com',
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=+201019765745',
  },
  {
    id: 4,
    icon: <RiMessengerLine />,
    title: 'Messenger',
    link: 'https://m.me/omar.bakr.1',
  },
]

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lx6tcwm', 'template_xju5t6r', form.current, '4LNAx7VUPNh_GfM8i',
      )
      e.target.reset()
  };
  return (
    <section className='contact' id='contact'>
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact-container">
        <div className="contact-options">
        {contactData.map(({ id, icon, title, link }) => {
          return (
            <article key={id} className='contact-option'>
              <div className="">
                {icon}
              </div>
              <h4>{title}</h4>
              <a href={link} target='_blank'>{link}</a>
            </article>
          )
        })}
      </div>
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Your Full Name' />
          <input type="email" name="email"  placeholder='Your Email' />
          <textarea name="message"  cols="30" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}
