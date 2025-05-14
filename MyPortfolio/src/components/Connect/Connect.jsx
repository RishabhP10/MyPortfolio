import React, { useRef, useState } from "react";
import styles from "./Connect.module.css";
import emailjs from '@emailjs/browser';


export const Connect = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        setSuccessMessage('');
        setErrorMessage('');

        emailjs
        .sendForm('service_kexm97w', 'template_b1und7q', form.current, {
            publicKey: 'zxrbc0b-LAouXzi5X',
        })
        .then(
            () => {
            setSuccessMessage("✅ Your message has been sent successfully!");
            e.target.reset();
            setTimeout(() => {
                setSuccessMessage('');
              }, 1000);
            },
            (error) => {
            setErrorMessage("❌ Failed to send message. Please try again.");
            console.log('FAILED...', error.text);
            setTimeout(() => {
                setSuccessMessage('');
              }, 1000);
            }
        );
    };
    
  return (
    <section className={styles.container} id="contact">
        <h2 className={styles.heading}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.contact}>
          <p>
            Thank you for visiting my website! I'm currently open to new
            opportunities and always happy to connect. Feel free to reach out
            using the contact form, and I'll do my best to get back to you soon!
          </p>
        </div>

        <form onSubmit={sendEmail} ref={form} className={styles.title}>
          <input type="text" className={styles.name} placeholder="Your Name" name="from_name"/>
          <input type="email" className={styles.email} placeholder="Your Email" name="from_email"/>
          <textarea className={styles.msg} name="message" placeholder="Your Message" />
          <button type="submit" className={styles.submitBtn}>Submit</button>

          {successMessage && <p className={styles.success}>{successMessage}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        </form>
      </div>
    </section>
  );
};
