import { useRouter } from 'next/router';
import React from 'react'
import { TwitterIcon, LinkedInIcon, InstagramIcon, SunIcon, MoonIcon } from './Icons';
import Layout from './Layout'
import Link from 'next/link';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
import Logo from './Logo';

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return(
      <Link href={href} className={`${className} relative group`}>
          {title}

          <span className={`
          h-1 inline-block bg-primary absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full h-1' : 'w-0'}
          dark:bg-primaryDark`}
          >
              &nbsp;
          </span>
      </Link>
  )
}

const Footer = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-primaryDark backdrop-blur-md
    sm:text-base
    '
    >
      <div className='bg-primary dark:bg-primaryDark px-8 py-8 lg:py-2'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <nav className="flex 2xl:pb-3 xl:pb-3 justify-center">
              <Logo />
          </nav>

          <div className='lg:pt-4'>
            <nav className="flex items-center justify-center flex-wrap">
              {/*                     
              <motion.a href="https://twitter.com/qdroyale" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 bg-dark rounded-md"
              >
                  <FacebookIcon />
              </motion.a>

              <motion.a href="https://twitter.com/qdroyale" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 bg-dark rounded-md"
              >
                  <TwitterIcon />
              </motion.a> */}

              
              <motion.a href="https://www.linkedin.com/company/royale-jewelry-co/" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3"
              >
                  <LinkedInIcon />
              </motion.a>
              
              <button
              onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
              className={`w-6 ml-3 flex items-center justify-center rounded-full p-1
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              `}
              >
                  {
                  mode === 'dark'?
                  <SunIcon className={"fill-dark"}/>
                  : <MoonIcon className={"fill-dark"}/>
                  }
              </button>
            </nav>
          </div>
        </Layout>

        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
            <div className='flex items-center lg:py-4'>
              <p>
                Disclaimer: This website collects usage data with Google Analytics, however it does not collect specific personal user data like name, email etc.
              </p>
            </div>
        </Layout>

        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
          <span>{new Date().getFullYear} &copy; 2008-Present | All Rights Reserved.</span>
            {/* <div className='flex items-center lg:py-4'>
                Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span>
                by&nbsp;<Link href="https://alfellati.xyz/" target={"_black"} className='underline underline-offset-2 text-primary dark:text-primaryDark'>MBA</Link>
            </div> */}
        </Layout>
      </div>
    </footer>
  )
}

export default Footer