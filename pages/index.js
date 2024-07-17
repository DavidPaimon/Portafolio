// components
import ParticlesContainer from "../components/ParticlesContainer";
import WelcomeScreen from "../components/WelcomeScreen";
// framer motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWelcomeFinish = () => {
    setShowWelcomeScreen(false);
  };

  if (!isClient) {
    return null; // Renderiza nada o un marcador de posición mientras se monta en el cliente
  }

  if (showWelcomeScreen) {
    return <WelcomeScreen onFinish={handleWelcomeFinish} />;
  }

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col xl:pt-40 xl:ml-16 xl:text-left h-full ms-auto">
          {/* title */}
          <motion.h1 
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className="h1 xl:-mt-10 xl:mb-2 mt-48 font-mono"
           >
            Transformando necesidades<br />en <span className="text-tercery">soluciones </span> digitales{' '}
          </motion.h1>
          {/* subtitle */}
          <motion.p
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-mono"
           style={{ color: '#FF69B4' }}
          >
            David
            Felipe
            Florido Jiménez
          </motion.p>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
         {/*particles*/}
         <ParticlesContainer />
         {/* avatar img */}
         <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[480px] max-h-[418px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
          {/* <Avatar /> */}
         </motion.div>
      </div>
    </div>
  );
};

export default Home;
