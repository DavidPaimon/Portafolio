// links
import Link from 'next/link';

// icons
import {
  RiGithubLine,
  RiGmailLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiYoutubeLine,
  RiFacebookLine,
} from 'react-icons/ri';

const Social = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiGmailLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
  </div>
  );
};

export default Social;
