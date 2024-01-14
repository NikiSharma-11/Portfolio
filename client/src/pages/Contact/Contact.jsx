import React, { useState } from 'react';
import './Contact.css';
import img from'../../components/Menus/images/cont.jpg'
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail, MdCall } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const contactDetails = { name, email, message };
    const url = "http://localhost:4000/api/v1/contact/contact"; 

    try {
      if(!name || !email || !message){
        alert('Please provide all field');
        return;
      }
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactDetails),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.err || 'An error occurred');
      } else {
        setName('');
        setEmail('');
        setMessage('');
        window.alert("Your message sent successfully")
        
      }
    } catch (err) {
      setError('Failed to send message');
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6">
            <div className="card1">
              <img src={img} alt="contact" className='image' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card2 card border-0 px-4 py-3">
              <h6>CONTACT WITH 
              <a href="https://www.linkedin.com/in/nikita21/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color='darkblue' size={30} className='ms-2'/>
              </a>

              <a href="mailto:neekitasharma24@gmail.com">
              <MdAttachEmail color='black' size={30} className='ms-2'/>
              </a>
                 
              <a href="tel:+9779848963905">  
              <MdCall color="#007bff" size={30} className='ms-2'/>
              </a>
              </h6>
            </div> 
            <div className="row px-3 mb-4">
              <div className="line" />
              <small className="or text-center">OR</small>
              <div className="line" />
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="row px-3">
                <input type='text' name='name' placeholder='Enter your name' className='mb-3' value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="row px-3">
                <input type='email' name='email' placeholder='Enter your email address' className='mb-3' value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="row px-3">
                <textarea name='message' placeholder='Write your message here' className='mb-3' value={message} onChange={e => setMessage(e.target.value)} />
              </div>
              <div className="row px-3">
                <button className='button' type='submit'>SEND MESSAGE</button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
