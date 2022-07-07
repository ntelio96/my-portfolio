import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qgmcrre', 'template_0ezs8x6', form.current, '1UZd121TsTwPxxmBY')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Tauch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mantas3456@gmail.com</h5>
            <a href="mailto:mantas3456@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mantas Siauciunas</h5>
            <a href="https://m.me/mantas.siauciunas.7/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>mantas3456@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=07878019768" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact