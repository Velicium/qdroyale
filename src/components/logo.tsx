import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import royaleIcon from '../../public/logos/logo.png';
import {
Navbar as MTNavbar,
Collapse,
Button,
IconButton,
Typography,
} from "@material-tailwind/react";
import {
RectangleStackIcon,
UserCircleIcon,
CommandLineIcon,
Squares2X2Icon,
XMarkIcon,
Bars3Icon,
} from "@heroicons/react/24/solid";

const Logo: React.FC = () => {
  return (
    <div className='flex items-center justify-center mt-4 md:justify-start'>
      <Link href="/" passHref>
        <a
          className='w-16 h-16 bg-primary dark:bg-primary text-dark dark:text-dark flex items-center justify-center
          rounded-full text-sm font-bold border border-solid border-primaryGreenDark dark:border-primaryGreenDark'
        >
          <Image src={royaleIcon} alt={"Royale Icon"} className='w-16 h-16 pb-1 pl-1 pr-1' priority />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
