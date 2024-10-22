import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; 
import logo from '../assets/assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'> 
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <img src='images/logo.jpg' className='mx-2' width={50} height={33} alt="logo"/>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/hemapriya18/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='LinkedIn'
        >
         <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/Hemapriya182024" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label='GitHub'
        >
         <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
