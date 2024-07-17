import React from 'react';
import { useRouter } from 'next/router';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { RxArrowTopRight } from "react-icons/rx";
import { IoDesktop, IoReader } from "react-icons/io5";
import { FaDatabase, FaServer, FaPaintBrush } from "react-icons/fa";
import { AiTwotoneApi } from "react-icons/ai";
import { MdIntegrationInstructions, MdBrowserUpdated } from "react-icons/md";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
const serviceData = [
  {
    icon: <FaDatabase />,
    title: 'Diseño y desarrollo de bases de datos',
    description: 'Creación, gestión y estructuración de bases de datos.',
    route: 'database-design'
  },
  {
    icon: <AiTwotoneApi />,
    title: 'API',
    description: 'Desarrollo de API RESTful para comunicación entre frontend y servidor.',
    route: 'api-development'
  },
  {
    icon: <IoDesktop />,
    title: 'Desarrollo Web',
    description: 'Programación del backend o frontend con Python, JavaScript y sus frameworks',
    route: 'web-development'
  },
  {
    icon: <IoReader />,
    title: 'Autenticación',
    description: 'Sistemas de autenticación y autorización para la gestión de usuarios.',
    route: 'authentication'
  },
  {
    icon: <MdIntegrationInstructions />,
    title: 'Integración con servicios externos',
    description: 'Conexión con servicios y APIs externas, como pagos y mailing.',
    route: 'external-integration'
  },
  {
    icon: <MdBrowserUpdated />,
    title: 'Mantenimiento y soporte',
    description: 'Actualización y mantenimiento continuo del backend.',
    route: 'maintenance-support'
  },
  {
    icon: <FaServer />,
    title: 'Gestión de servidores',
    description: 'Configuración y despliegue en producción.',
    route: 'server-management'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Diseño UI/UX',
    description: 'Animaciones, diseño estetico e intuitivo en toda tu app.',
    route: 'design'
  },
];

const ServiceSlider = () => {
  const router = useRouter();

  const handleSlideClick = (route) => {
    router.push(`/services/${route}`);
  };

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10, // Reduce el espacio entre slides en móvil
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        el: '.swiper-pagination', // Asegúrate de que la paginación esté visible
      }}
      modules={[FreeMode, Pagination]}
      className='h-[280px] sm:h-[340px] relative' // Establece una altura menor para móviles
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} onClick={() => handleSlideClick(item.route)}>
            <div className='bg-[rgba(118,255,116,0.15)] h-full rounded-lg px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between items-start group cursor-pointer hover:bg-[rgba(127,92,115,0.69)] transition-all duration-300'>
              {/* icon */}
              <div className='text-3xl sm:text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div>
                <div className='mb-2 text-sm sm:text-lg'>{item.title}</div> {/* Ajusta el tamaño del texto */}
                <p className='leading-normal text-xs sm:text-sm'>{item.description}</p> {/* Ajusta el tamaño del texto */}
              </div>
              {/* arrow */}
              <div className='text-2xl sm:text-3xl mt-auto'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination mt-4"></div> {/* Contenedor para la paginación */}
    </Swiper>
  );
};

export default ServiceSlider;
