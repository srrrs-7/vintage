import React from 'react';
import 'tw-elements';

const ImageGallery = () => {
  return (
    <div className='overflow-scroll fixed w-[100%] h-[100%] bg-orange-300'>
      <div className='flex'>
        <h2 className='p-5 mx-auto font-serif text-7xl text-white animate-pulse'>Photo Gallery</h2>
      </div>
      <section className='overflow-hidden text-gray-700 '>
        <div className='container py-2 px-5 mx-auto lg:px-20 lg:pt-2'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/outdoor.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/board.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/night.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/workchair.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/cameras.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/3'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/chair.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='overflow-hidden text-gray-700'>
        <div className='container py-2 px-5 pb-20 mx-auto lg:px-20 lg:pt-8 '>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            <div className='flex flex-wrap w-1/2'>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant1.jpg'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant2.jpg'
                />
              </div>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant3.jpg'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/2'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant1.jpg'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant2.jpg'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg transition duration-150 ease-in-out hover:scale-105'
                  src='/plant3.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-3 grid-rows-3 gap-10 justify-center items-center mx-auto w-[400px] h-[450px]'>
        <img src='/inside.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/menu.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/inside2.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/shop.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/camera.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/logo1.png' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/new1.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/new2.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
        <img src='/new3.jpg' alt='gallery' className='rounded-lg hover:scale-105' />
      </section>

      <div className='mb-44'></div>
    </div>
  );
};

export default ImageGallery;
