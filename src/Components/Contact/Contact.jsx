import { useState } from 'react'
import './Contact.css'
import theme from '../../data/assets/theme_pattern.svg';
import mail from '../../data/assets/gmail.png'
import phone from '../../data/assets/phone.png'
import location from '../../data/assets/location.png'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c8612b3b-60ff-401f-891a-a732071332a3");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully!");
      console.log("Success", res);
      event.target.reset();
    }
  };

  return (
    <section id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="theme" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail} alt="mail" />
                <a href='mailto:madhanraj242003@gmail.com'>madhanraj242003@gmail.com</a>           
            </div>
            <div className="contact-detail">
                <img src={phone} alt="phone" />
                <p>+91 9360770284</p>
            </div>
            <div className="contact-detail">
                <img src={location} alt="location" />
                <p>Pattabiram, Chennai - 600072</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder='Enter your name' name='name' autoComplete="name" required/>

            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder='Enter your email' name='email' autoComplete="email" required/>

            <label htmlFor="message">Write your message here</label>
            <textarea id="message" name="message" rows="8" placeholder='Enter your message' autoComplete="off" required></textarea>

            <button type='submit' className='contact-submit'>Submit now</button>
            <p>{result}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact;
