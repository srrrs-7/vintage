import ContentCutIcon from '@mui/icons-material/ContentCut';
import React from 'react';

type Props = {};

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
      </div>
      <div className='overflow-hidden relative w-full h-screen carousel-inner'>
        <div className='float-left relative w-full h-screen bg-center bg-no-repeat bg-cover carousel-item active'>
          <video className='w-[1800px]' playsInline autoPlay muted loop>
            <source src='vintage.mp4' type='video/mp4' />
          </video>
          <div className='overflow-hidden absolute inset-0 w-full h-full bg-fixed'>
            <div className='flex justify-center items-center h-full'>
              <div className='px-14 text-center text-white px-md-0'>
                <h5 className='mb-6 font-serif text-5xl text-gray-300'>Hair Studio</h5>
                <h2 className='mb-4 font-serif text-9xl text-gray-300'>VINTAGE</h2>
                <div className='text-4xl md:space-x-2 '>
                  <a
                    type='button'
                    className='py-3 px-6 mt-5 text-xs font-medium leading-tight text-gray-300 uppercase hover:bg-black hover:bg-opacity-5 rounded border-2 border-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-gray-300inline-block'
                    href='/vintage/home'
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
              <div className='px-14 text-center px-md-0'>
                <h2 className='mb-4 text-7xl font-semibold text-gray-300'>hair studio vintage</h2>
                <div className='text-4xl md:space-x-2'>
                  <a
                    type='button'
                    className='inline-block py-3 px-6 mt-5 text-xs font-medium leading-tight text-gray-300 uppercase hover:bg-black rounded border-2 border-white focus:outline-none focus:ring-0 hover:opacity-5 transition duration-150 ease-in-out'
                    href='/vintage/home'
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
                <h2 className='mb-4 text-7xl font-semibold text-gray-300'>hair studio vintage</h2>
                <a
                  type='button'
                  className='inline-block py-3 px-6 text-xs font-medium leading-tight text-gray-300 uppercase hover:bg-black rounded border-2 border-white focus:outline-none focus:ring-0 hover:opacity-5 transition duration-150 ease-in-out'
                  href='/vintage/home'
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
        <ContentCutIcon fontSize='large' className='ml-4 text-white hover:scale-125 rotate-180' />
      </button>
      <button
        className='flex absolute inset-y-0 right-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptionsFull'
        data-bs-slide='next'
      >
        <span className='inline-block bg-no-repeat' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
        <ContentCutIcon fontSize='large' className='mr-4 hover:scale-125' />
      </button>
    </div>
  );
};

export default MovieSlider;
