// components
import React, { useEffect } from "react";
import WorkSlider from "../../components/WorkSlider.js";
import Bulb from "../../components/Bulb.js";
import Circles from "../../components/Circles.js";

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';

const Work = () => {

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('scroll-container');
      if (window.innerWidth <= 768) {
        container.style.overflowY = 'auto';
        container.style.overflowX = 'hidden'; // Desactiva el desplazamiento horizontal
        container.style.maxHeight = '100vh';
        container.style.paddingRight = '1rem';
        container.style.paddingLeft = '1rem';
      } else {
        container.style.overflowY = 'initial';
        container.style.overflowX = 'initial'; // Restablece el desplazamiento horizontal
        container.style.maxHeight = 'initial';
        container.style.paddingRight = 'initial';
        container.style.paddingLeft = 'initial';
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call once to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="scroll-container" className="relative h-full bg-primary/30 py-16 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 text-xl xl:text-4xl xl:mt-8" // Ajusta el tamaño del texto
            >
              My Projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm xl:text-base" // Ajusta el tamaño del texto
            >
              <span className="hidden xl:block">
                Ofrezco una amplia gama de servicios para satisfacer tus necesidades tecnológicas. Desde la creación y gestión de bases de datos, pasando por el desarrollo de APIs RESTful, hasta la programación completa de sitios web tanto en el backend como en el frontend.
                Mi objetivo es proporcionar soluciones eficientes y de alta calidad para impulsar tus proyectos al siguiente nivel.
              </span>
              <span className="block xl:hidden">
                Ofrezco una amplia gama de servicios para satisfacer tus necesidades tecnológicas. Desde la creación y gestión de bases de datos, pasando por el desarrollo de APIs RESTful, hasta la programación completa de sitios web tanto en el frontend como en el backend.
                Mi objetivo es proporcionar soluciones eficientes y de alta calidad para impulsar tus proyectos al siguiente nivel.
              </span>
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
