import { React, useState, useLayoutEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Footer.scss'
import { AppWrap } from '../../wrapper';
import PhoneIcon from '../../assets/phone-icon.png'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const Footer = () => {

  const [statusMessage, setStatusMessage] = useState(" ");


  // **this prevents automatic scroll to bottom after refresh**//

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  });

  // **this prevents automatic scroll to bottom after refresh**//


  // **this makes React scroll to top on page refresh**//

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  // **this makes React scroll to top on page refresh**//

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_PUBLIC_EMAILJS_SERVICE_ID, process.env.REACT_APP_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        setStatusMessage();
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset()
  };

  return (
    <>
      <h2 className="head-text-footer">Let's <span>get in</span> touch</h2>
      <h2 className="head-text-footer">Make Yourself <span>A Cup Of</span> Coffee</h2>

      <div className="contact__form app__flex ">

        <motion.div whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, type: 'tween' }} className="contact" action="" method="post" >

          <h3> {statusMessage ? 'And Write Me An Email' : 'Message Has Been Sent Successfully'}</h3>

          {/* <form ref={form} onSubmit={sendEmail}>
            <label className='ml-10' >Name :</label>
            <input type="text" name="user_name" autoComplete="user_name" required />
            <label className='ml-10'>Email :</label>
            <input type="email" name="user_email" autoComplete="user_email" required />
            <label className='ml-10'>Message :</label>
            <textarea name="message" autoComplete="user_name" required />
            <input type="submit" value="Send" className='button' />
          </form> */}
<form ref={form} onSubmit={sendEmail}>
  <label className='ml-10' htmlFor='user_name'>Name :</label>
  <input type="text" id='user_name' name="user_name" autoComplete="user_name" required />
  <label className='ml-10' htmlFor='user_email'>Email :</label>
  <input type="email" id='user_email' name="user_email" autoComplete="user_email" required />
  <label className='ml-10' htmlFor='message'>Message :</label>
  <textarea id='message' name="message" autoComplete="user_name" required />
  <input type="submit" value="Send" className='button' />
</form>

        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles footer-position "
        >
          <div className='circle-cmp app__flex fotter_circle-position'>
            <h1 className='p-text' style={{ textAlign: 'center' }}>Or Call</h1>
            <h1 className='p-text' style={{ textAlign: 'center' }}>Me</h1>

          </div>
          <div className='circle-cmpf overide-footer app__flex blue'>
            <img className='circle-cmpf' alt='PhoneIcon' src={PhoneIcon} />
            <h1 className='p-text blue'>+381 (66) 10 10 30</h1>
          </div>
        </motion.div>
      </div>

    </>
  )

}


export default AppWrap(Footer, 'contact');