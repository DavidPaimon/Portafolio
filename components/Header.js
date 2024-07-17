import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importar el hook useRouter

const Header = () => {
  const router = useRouter(); // Usar el hook useRouter para obtener la ruta actual

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='text-left -ml-12 xl:ml-4 xl:mb-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-1'>
          {/* logo */}
          <Link href={'/'}>
            <div className="w-32 h-8 md:w-56 md:h-12"> {/* Cambia los valores según sea necesario */}
              <Image 
                src={'/logo.svg'} 
                layout='responsive'
                width={220} 
                height={48} 
                alt='Logo' 
                priority={true} 
              />
            </div>
          </Link>
          {/* Socials */}
          {/* <Social /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
