import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='flex z-50 justify-between items-center py-3 px-40 w-full sm:justify-center sm:items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='vintage_logo'
            width={60}
            height={60}
            className='bg-blue-800 rounded-full cursor-pointer'
          />
        </Link>

        <div className='flex justify-center items-center p-1 space-x-20 sm:space-x-2'>
          <Link href='/'>
            <a className='block py-2 pr-1 mx-4 font-serif text-xl text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'>
              Home
            </a>
          </Link>
          <Link href='/vintage/access'>
            <a className='block py-2 pr-2 mx-4 font-serif text-xl text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'>
              Access
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
