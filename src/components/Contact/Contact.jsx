/* eslint-disable no-unused-vars */
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTelephonePlus, BsWhatsapp } from 'react-icons/bs';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3lk24aj', 'template_j9529id', form.current, 'HsOput3JXwbVJuCAX')
      .then((result) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been sent!',
            showConfirmButton: false,
            timer: 1500
          })
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name="contact" className="bg-gradient-to-r from-black via-gray-900 to-gray-700 min-h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <p className="text-4xl font-bold border-b-4 border-green-600">Contact</p>
        <p className="py-4">Send me a message</p>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col mb-5 space-y-2">
        <div className="flex items-center space-x-2">
          <BiLogoGmail/>
          <span>Mail: tanvirkhondo21@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsTelephonePlus/>
          <span>Phone: +880 1790066808</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsWhatsapp/>
          <span>WhatsApp: +880 1790066808</span>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto p-4">
        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <label className="text-xl">Name</label>
          <input required type="text" name="user_name" className="p-2 rounded" />
          <label className="text-xl">Email</label>
          <input required type="email" name="user_email" className="p-2 rounded" />
          <label className="text-xl">Message</label>
          <textarea name="message" className="p-2 rounded" rows="4" />
          <input required className="p-2 btn btn-outline hover:bg-green-600 hover:border-green-600 text-white rounded cursor-pointer" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
