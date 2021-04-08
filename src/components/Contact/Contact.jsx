import React from "react";
import "../../styles/styles.css";
import contact from "../../Media/contact.jpg";

function Contact() {
  return (
    <div className='Contact section'>
      <h1 className='section__heading'>Contact Us</h1>
      <hr className='blueHr' />
      <div className='contact__container'>
        <form action='' className='contact__form'>
          <h2 className='contact__header'>Leave a message..</h2>
          <input type='text' placeholder='name*' required />
          <input type='text' placeholder='contact*' required />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='message*'
            required
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
