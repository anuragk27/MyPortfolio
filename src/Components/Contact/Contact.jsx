import React from 'react'
import './Contact.css'
import img1 from '../../assets/email.png'
import img2 from '../../assets/call.png'
import img3 from '../../assets/location.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "06805a31-f215-4145-8f1f-336f3285c66a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets's talk</h1>
          <p>i'm currently available to take on new projects,so for </p>
          <div className="contact-details">
              <div className="contact-detail">
                <img src={img1} alt="" /><p>anuragk.c11@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={img2} alt="" /><p>7065543419</p>
              </div>
              <div className="contact-detail">
                <img src={img3} alt="" /><p>Noida,India</p>
              </div>
          </div>
        </div>
          <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your email' name='name'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="4" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
      </div>
    </div>
  )
}

export default Contact