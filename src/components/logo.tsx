import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import royaleIcon from '../../public/logos/royale-label-372x74.png';

const Logo: React.FC = () => {
  return (
    <div className='flex items-center justify-center mt-4 md:justify-start'>
      <Link href="/" passHref legacyBehavior>
        <a
          className='w-full h-full flex items-center justify-center'
        >
          <Image src={royaleIcon} alt={"Royale Icon"} className='w-[100px] h-[24px] pb-1 pl-1 pr-1' priority />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
