import React from 'react';

const MovieSlider = () => {
  return (
    <>
      <div>
        <video className='flex fixed left-0 z-10 w-[100%]' autoPlay loop>
          <source src='vintage.mp4' type='video/mp4' />
        </video>

        <div className='z-20'>
          <p className='flex fixed z-10 justify-center w-[100%] h-[100%] font-serif text-gray-300 underline underline-offset-4 animate-pulse sm:top-[150px] sm:text-xl md:top-64 lg:top-96'>
            V I N T A G E
          </p>
          <p className='flex fixed z-10 justify-center mt-28 w-[100%]  h-[100%] font-serif text-gray-200 animate-pulse sm:top-[70px] md:top-44 lg:top-80 sm:text-md'>
            Hair Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;
