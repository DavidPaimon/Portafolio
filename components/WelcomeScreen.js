import { useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="bg-primary/70 h-full flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-accent"
      >
        David Felipe Florido Jiménez
      </motion.h1>
      <motion.p
        className="text-lg text-tercery"
      >
        Full Stack Developer
      </motion.p>
    </div>
  );
};

export default WelcomeScreen;
