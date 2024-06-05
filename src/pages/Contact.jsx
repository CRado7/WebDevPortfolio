import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
   
    emailjs.init('H-T7jVCRuUSZlDFkh');
  }, []); 

  const submit = () => {
      if (name && email && message) {
          const serviceId = 'service_gxdh5qa'
          const templateId = 'template_5wz1cql'
          const templateParams = {
              name,
              email,
              message
          }

          emailjs.send(serviceId, templateId, templateParams)
              .then(response => console.log(response))
              .then(error => console.log(error))

          setName('')
          setEmail('')
          setMessage('')
          setEmailSent(true)
      } else {
          alert('Please fill in all fields.')
      }
  }
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
              <h2 className="text-10 fw-600 mb-5">Let's get in touch</h2>
              <p className="text-5 mb-5">I enjoy discussing new projects, design challenges and job opportunities.! Please share as much information as possible so we can hit the ground running.</p>
              <h3 className="text-5 fw-600">Living In:</h3>
              <address className="text-4">
                Springfield, MA
              </address>
              <h3 className="text-5 fw-600">Call:</h3>
              <p className="text-4 "><a className="text-light" id="phone-number" href="tel: 7743923956">(774) 392 3956</a></p>
              <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
                <li className="social-icons-github"><a data-bs-toggle="tooltip" href="https://github.com/CRado7" target="_blank" title="" data-bs-original-title="GitHub"><i className="fab fa-github"></i></a></li>
                <li className="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/in/christopher-ferraro-7a3883170/" target="_blank" title="" data-bs-original-title="linkedin"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp" data-wow-delay="0.3s">

              <form id="contact-form" className="form-border">
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label" htmlFor="name">What is Your Name:</label>
                    <input id="name" name="name" type="text" className="form-control py-1" value={name} onChange={e => setName(e.target.value)} required ></input>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="email">Your Email Address:</label>
                    <input id="email" name="email" type="email" className="form-control py-1" value={email} onChange={e => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ></input>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="form-message">How can I Help you?:</label>
                    <textarea id="form-message" name="form-message" className="form-control py-4" rows="4" value={message} onChange={e => setMessage(e.target.value)} required ></textarea>
                  </div>
                  <div className="col-12 text-center text-lg-start">
                    <button id="submit-btn" className="btn btn-light rounded-0" type="submit" onClick={submit}>Send <span className="ms-3"><i className="fas fa-arrow-right"></i></span></button>
                  </div>
                </div>
              </form>

              {emailSent && <div className="alert alert-success mt-4">Thanks for getting in touch! I will get back to you as soon as I can.</div>}

            </div>
          </div>
        </div>
      </section>
    );
}