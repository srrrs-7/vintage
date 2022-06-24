import ContentCutIcon from '@mui/icons-material/ContentCut';
import React from 'react';
import 'tw-elements';

const MovieSlider = () => {
  return (
    <div
      id='carouselExampleCaptionsFull'
      className='relative h-screen carousel slide carousel-fade'
      data-bs-ride='carousel'
    >
      <div className='flex absolute inset-x-0 bottom-0 justify-center p-0 mb-4 carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptionsFull'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptionsFull'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptionsFull'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptionsFull'
          data-bs-slide-to='3'
          aria-label='Slide 4'
        ></button>
      </div>
      <div className='overflow-hidden relative w-full h-screen carousel-inner'>
        <div className='float-left relative w-full h-screen bg-center bg-no-repeat bg-cover carousel-item active'>
          <video className='w-[1800px]' playsInline autoPlay muted loop>
            <source src='vintage.mp4' type='video/mp4' />
          </video>
          <div className='overflow-hidden absolute inset-0 w-full h-full bg-fixed'>
            <div className='flex justify-center items-center h-full'>
              <div className='px-14 mb-20 text-center text-white px-md-0'>
                <h5 className='mb-6 font-serif text-5xl text-white animate-pulse'>Hair Studio</h5>
                <h2 className='mb-4 font-serif text-9xl text-white animate-pulse'>V I N T A G E</h2>
                <div className='text-4xl md:space-x-2 '>
                  <a
                    type='button'
                    className='py-3 px-6 mt-5 text-xs font-medium leading-tight text-white uppercase hover:bg-orange-400 rounded border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-gray-300inline-block'
                    href='/vintage/menu'
                    role='button'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='float-left relative w-full h-screen bg-center bg-no-repeat bg-cover carousel-item'>
          <video className='w-[1800px]' playsInline autoPlay muted loop>
            <source src='vintage.mp4' type='video/mp4' />
          </video>
          <div className='overflow-hidden absolute inset-0 w-full h-full bg-fixed'>
            <div className='flex justify-center items-center h-full'>
              <div className='px-14 text-center px-md-0mb-24'>
                <h2 className='mb-4 text-7xl font-semibold text-white animate-pulse'>
                  Photo Gallery
                </h2>
                <div className='text-4xl md:space-x-2'>
                  <a
                    type='button'
                    className='inline-block py-3 px-6 mt-5 text-xs font-medium leading-tight text-white uppercase hover:bg-orange-400 rounded border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                    href='/vintage/gallery'
                    role='button'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='float-left relative w-full h-screen bg-center bg-no-repeat bg-cover carousel-item'>
          <video className='w-[1800px]' playsInline autoPlay muted loop>
            <source src='vintage.mp4' type='video/mp4' />
          </video>
          <div className='overflow-hidden absolute inset-0 w-full h-full bg-fixed'>
            <div className='flex justify-center items-center h-full'>
              <div className='px-14 text-center text-white px-md-0'>
                <h2 className='mb-4 text-7xl font-semibold text-white animate-pulse'>Menu</h2>
                <a
                  type='button'
                  className='inline-block py-3 px-6 text-xs font-medium leading-tight text-white uppercase hover:bg-orange-400 rounded border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                  href='/vintage/menu'
                  role='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='float-left relative w-full h-screen bg-center bg-no-repeat bg-cover carousel-item'>
          <video className='w-[1800px]' playsInline autoPlay muted loop>
            <source src='vintage.mp4' type='video/mp4' />
          </video>
          <div className='overflow-hidden absolute inset-0 w-full h-full bg-fixed'>
            <div className='flex justify-center items-center h-full'>
              <div className='px-14 text-center text-white px-md-0'>
                <h2 className='mb-4 text-7xl font-semibold text-white animate-pulse'>Access</h2>
                <a
                  type='button'
                  className='inline-block py-3 px-6 text-xs font-medium leading-tight text-white uppercase hover:bg-orange-400 rounded border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                  href='/vintage/access'
                  role='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='flex absolute inset-y-0 left-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptionsFull'
        data-bs-slide='prev'
      >
        <span className='inline-block bg-no-repeat' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
        <ContentCutIcon
          fontSize='large'
          className='ml-4 text-orange-400 hover:scale-125 rotate-180'
        />
      </button>
      <button
        className='flex absolute inset-y-0 right-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptionsFull'
        data-bs-slide='next'
      >
        <span className='inline-block bg-no-repeat' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
        <ContentCutIcon fontSize='large' className='mr-4 text-orange-400 hover:scale-125' />
      </button>
    </div>
  );
};

export default MovieSlider;
