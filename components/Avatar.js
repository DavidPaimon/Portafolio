// next image
import Image from "next/image";

const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image 
      src={'/perfil.png'} 
      width={750} 
      height={600} 
      alt='' 
      className='translate-z-0 w-full h-full'
      />
  </div>
  );
};

export default Avatar;
