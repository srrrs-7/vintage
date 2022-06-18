import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className='flex relative top-0 justify-between items-center py-2 w-full h-20 bg-blue-800 shadow-lg'>
        <div className='p-2 ml-28 rounded-full'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='vintage_logo'
              width={60}
              height={60}
              className='bg-blue-800 rounded-full cursor-pointer'
            />
          </Link>
        </div>
        <div className='flex justify-between items-center px-6 mr-10 ml-auto'>
          <div className='grow items-center'>
            <ul className='space-x-7 lg:flex lg:flex-row'>
              <li>
                <a
                  className='block py-2 pr-2 mx-4 font-serif text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'
                  href='/vintage/home'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className='block py-2 pr-2 mx-4 font-serif text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'
                  href='/vintage/gallery'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className='block py-2 pr-2 mx-4 font-serif text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'
                  href='/vintage/Menu'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  className='block py-2 pr-2 mx-4 font-serif text-white hover:text-orange-400 transition duration-150 ease-in-out hover:scale-110 lg:px-2'
                  href='/vintage/access'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
