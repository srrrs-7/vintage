import Image from 'next/image';
import React from 'react';
import Header from './Header';

const ImageGallery = () => {
  return (
    <div>
      <Header />
      <div id='carouselExampleControls' className='relative carousel slide' data-bs-ride='carousel'>
        <div className='overflow-hidden relative w-full carousel-inner'>
          <div className='float-left relative w-full carousel-item active'>
            <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
              className='block w-full'
              alt='Wild Landscape'
            />
          </div>
          <div className='float-left relative w-full carousel-item'>
            <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
              className='block w-full'
              alt='Camera'
            />
          </div>
          <div className='float-left relative w-full carousel-item'>
            <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
              className='block w-full'
              alt='Exotic Fruits'
            />
          </div>
        </div>
        <button
          className='flex absolute inset-y-0 left-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span
            className='inline-block bg-no-repeat carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='flex absolute inset-y-0 right-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span
            className='inline-block bg-no-repeat carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <section className='overflow-hidden text-gray-700'>
        <div className='container py-2 px-5 mx-auto lg:px-32 lg:pt-24'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            <div className='flex flex-wrap w-1/2'>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp'
                />
              </div>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                />
              </div>
            </div>
            <div className='flex flex-wrap w-1/2'>
              <div className='p-1 w-full md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp'
                />
              </div>
              <div className='p-1 w-1/2 md:p-2'>
                <img
                  alt='gallery'
                  className='block object-cover object-center w-full h-full rounded-lg'
                  src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
