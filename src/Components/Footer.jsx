import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='lg:w-full sm:w-screen lg:py-5 sm:py-3 bg-[#f1f1f1] dark:bg-[#141414] flex items-center justify-center sm:px-1 lg:px-0'>
        <div className='lg:w-[1200px] sm:w-full flex items-center justify-between h-full opacity-50 dark:text-dark_tc'>
            <div className='lg:w-[300px] sm:w-1/3 sm:min-h-full'>
                <p className='font-bold lg:text-lg sm:text-sm mb-2'>About</p>
                <p className='sm:text-xs'>Frontend Developer based in Hannover, Germany</p>
            </div>
            <div className='flex flex-col w-1/3 items-center'>
                <p className='font-bold lg:text-lg sm:text-sm mb-2'>Links</p>
                <Link to='home' spy={true} smooth={true}  duration={500} className='cursor-pointer sm:text-xs hover:text-orange duration-300'>
                    Home
                </Link>
                <Link to='skills' spy={true} smooth={true}  duration={500} className='cursor-pointer sm:text-xs hover:text-orange duration-300'>
                    Skills
                </Link>
                <Link to='contact' spy={true} smooth={true}  duration={500} className='cursor-pointer sm:text-xs hover:text-orange duration-300'>
                    Contact
                </Link>
            </div>
            <div className='flex flex-col items-end h-full lg:w-[200px] sm:w-1/3'>
                <p className='font-bold lg:text-lg sm:text-sm mb-2'>Socials</p>
                <a href='https://www.linkedin.com/in/hamzamirza-frontenddev/' target='blank' className='flex items-center cursor-pointer hover:text-orange duration-300'>
                    <i className="fa-brands fa-linkedin mr-2 lg:text-xl sm:text-base"></i>
                    <p className='sm:text-xs'>LinkedIn</p>
                </a>
                <a href='https://github.com/devham236' target='blank' className='flex items-center cursor-pointer hover:text-orange duration-300'>
                    <i className="fa-brands fa-github mr-2 lg:text-xl sm:text-base"></i>
                    <p className='sm:text-xs'>GitHub</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer