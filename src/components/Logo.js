import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import royaleIcon from '../../public/images/royale-label-372x74.png';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-4 md:justify-start'>
      <Link href="/"
        className='w-full h-full flex items-center justify-center
        rounded-full text-sm font-bold'
      >
          <Image src={royaleIcon} alt={"Royale Icon"} className='w-[100px] h-[24px]' priority />
      </Link>
    </div>
  )
}

export default Logo