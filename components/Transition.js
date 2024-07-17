// framer motion
import {motion} from 'framer-motion';

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    widht: '100%'
  },
  animate: {
    x: '0%',
    widht: '0%'
  },
  exit: {
    x:['0%', '100%'],
    widht: ['0%', '100%']
  },
};

const Transition = () => {
  return (
    <>
      <motion.div 
      className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#007800]'
      variants={transitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      transition={{delay: 0.1,duration: 0.1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div 
      className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-primary'
      variants={transitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      transition={{delay: 0.2,duration: 0.1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div 
      className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#004e00]'
      variants={transitionVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      transition={{delay: 0.3,duration: 0.1, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
