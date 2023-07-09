import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tycgqt1', 'template_fifokh9', form.current, 'LgtUv7_fQ7pYNIM4K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container'>
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /> <br />
      <label>Email</label>
      <input type="email" name="user_email" /> <br />
      <label>Message</label>
      <textarea name="message" /> <br />
      <input className='submit' type="submit" value="Send" />
    </form>
    </div>
  );
};