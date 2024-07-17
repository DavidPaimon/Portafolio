import React, { useState, useEffect } from "react";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs, SiFramer, SiRedux, SiExpress, SiTailwindcss, SiMysql, SiTypescript } from "react-icons/si";
import { DiDjango } from "react-icons/di";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: (
          <>
            <span style={{ color: "#DAA520" }}>Backend</span>
          </>
        ),
        icons: [
          <FaPython />,
          <DiDjango />,
          <FaNodeJs />,
          <SiExpress />,
          <FaJs />,
        ],
      },
      {
        title: (
          <>
            <span style={{ color: "#DAA520" }}>Database</span>
          </>
        ),
        icons: [
          <SiMysql />,
          <BiLogoPostgresql />,
        ],
      },
      {
        title: (
          <>
            <span style={{ color: "#DAA520" }}>Web Developer</span>
          </>
        ),
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiTypescript />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiTailwindcss />,
          <SiRedux />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: (
          <>
            Backend Developer, <span style={{ color: '#DAA520' }}>DevNest Innova</span>
          </>
        ),
        stage: 'May / 2024 - Actualidad',
      },
      {
        title: (
          <>
            Frontend & UI/UX, <span style={{ color: "#DAA520" }}>AmorEterno </span>(Freelancer)
          </>
        ),
        stage: 'Nov / 2023',
      },
      {
        title: (
          <>
            Full Stack Web Developer, <span style={{ color: "#DAA520" }}>Nomad Locals</span>
          </>
        ),
        stage: 'Jun / 2023 - Ago / 2023',
      },
      {
        title: (
          <>
            Frontend & UI/UX, <span style={{ color: "#DAA520" }}>Bella Historia </span>(Freelancer)
          </>
        ),
        stage: 'Jun / 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Ingeniería Electrónica, Universidad de los Llanos',
        stage: '<a style="color: #FF69B4">CURSANDO</a>',
      },
      {
        title: 'Full Stack Web Developer, Henry Academy',
        stage: '<a href="https://www.linkedin.com/in/david-felipe-florido-jim%C3%A9nez-a862bb262/overlay/1720110690222/single-media-viewer/?profileId=ACoAAEB5A0YB9xNVZ2wz7CakqcBN_eiUn3FCQLg" target="_blank" style="color: #DAA520; position: relative; text-decoration: none; transition: color 0.3s;" onMouseOver="this.style.color=\'#FFD700\'" onMouseOut="this.style.color=\'#DAA520\'">CERTIFICADO<span style="position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: #DAA520; visibility: hidden; transform: scaleX(0); transition: all 0.3s ease-in-out;" class="link-underline"></span></a>',
      },
      {
        title: 'Backend REST API with Python & Django, UDEMY',
        stage: '<a href="https://udemy-certificate.s3.amazonaws.com/image/UC-d73f4d22-2d69-4479-af6b-584b205f54de.jpg" target="_blank" style="color: #DAA520; position: relative; text-decoration: none; transition: color 0.3s;" onMouseOver="this.style.color=\'#FFD700\'" onMouseOut="this.style.color=\'#DAA520\'">CERTIFICADO<span style="position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: #DAA520; visibility: hidden; transform: scaleX(0); transition: all 0.3s ease-in-out;" class="link-underline"></span></a>',
      },
    ],
  },
];

// components
// import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('scroll-container');
      if (window.innerWidth <= 768) {
        container.style.overflowY = 'auto';
        container.style.maxHeight = '100vh';
        container.style.paddingRight = '1rem';
        container.style.paddingLeft = '1rem';
      } else {
        container.style.overflowY = 'initial';
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
    <div className="h-full bg-primary/30 py-16 text-center xl:text-left">
      <Circles />
      {/* {avatar img} */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute -bottom-3 -left-[190px] max-w-[420px] max-h-[460px]'
      >
        {/* <Avatar /> */}
      </motion.div>
      <div id="scroll-container" className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* {text} */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2"
          >
            Transformando necesidades en 
            <span className="text-accent"> soluciones </span>digitales.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hace más de un año comencé a trabajar como desarrollador. Desde entonces he realizado trabajo remoto y presencial, colaborando con grupos de desarrolladores frontend y backend para la realización de software de calidad.
          </motion.p>
          {/* {counters} */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* {experience} */}
              <div className="relative flex-1 after:w-[1xp] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                  Años de experiencia
                </div>
              </div>
              {/* {clients} */}
              <div className="relative flex-1 after:w-[1xp] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={12} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                  Proyectos realizados
                </div>
              </div>
              {/* {projects} */}
              <div className="relative flex-1 after:w-[1xp] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                  Integraciones
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* {info} */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* {title} */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div dangerouslySetInnerHTML={{ __html: item.stage }}></div>
                  <div className="flex gap-x-4">
                    {/* {icons} */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
