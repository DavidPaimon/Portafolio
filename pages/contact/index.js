// components
import Circles from '../../components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Correo enviado correctamente');
      } else {
        alert('Error al enviar el correo: ' + result.message);
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      alert('Error al enviar el correo');
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full -mb-48'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center -mt-18 mb-4'
          >
            <span className='text-accent'>Conectate</span> conmigo.
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            {/* input  */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='Nombre' className='input' value={formData.name} onChange={handleChange} required />
              <input type='email' name='email' placeholder='Email' className='input' value={formData.email} onChange={handleChange} required />
            </div>
            <input type='text' name='subject' placeholder='Asunto' className='input' value={formData.subject} onChange={handleChange} required />
            <textarea name='message' placeholder='Mensaje' className='textarea' value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group -mt-2'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Contactame
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
