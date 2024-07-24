// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Lingua',
          path: '/thumbLingua.png',
          link: 'https://rec-voz.vercel.app/',
        },
        {
          title: 'NomadLocals',
          path: '/thumb.jpg',
          link: 'https://nomandlocals.netlify.app/',
        },
        {
          title: 'DevNest Innova',
          path: '/thumbdevnest.jpg',
          link: 'https://devnest-eosin.vercel.app/',
        },
        {
          title: 'CountryApp',
          path: '/thumbCApp.jpg',
          link: 'https://github.com/DavidPaimon/Countries',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumbRMApp.jpg',
          link: 'https://github.com/DavidPaimon/Rick-and-Morty',
        },
        {
          title: 'VgApp',
          path: '/thumbVgApp.jpg',
          link: 'https://github.com/DavidPaimon/VideogameApp',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-auto sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group w-full h-40 sm:h-40 md:h-60 lg:h-60 xl:h-60'
                    key={index}
                    onClick={() => {
                      if (image.link) {
                        window.open(image.link, '_blank');
                      }
                    }}
                    style={{ cursor: image.link ? 'pointer' : 'default' }}
                  >
                    <div className='w-full h-full'>
                      {/* image */}
                      <Image src={image.path} layout='fill' objectFit='cover' alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#DAA520] to-[#006400] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center ml-1.5 xl:ml-28 gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100 md:hidden md:-mr-1'>Visit</div>
                          <div className='delay-100 hidden md:block'>Link to</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] -ml-1 group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            Project
                          </div>
                          {/* icon */}
                          <div className='text-xl -ml-1 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
