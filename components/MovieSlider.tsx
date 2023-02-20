import React from 'react';

const MovieSlider = () => {
  return (
    <>
      <div>
        <video
          className='flex fixed top-0 left-0 z-10 mt-20 min-w-full'
          playsInline
          autoPlay
          muted
          loop
        >
          <source src='vintage.mp4' type='video/mp4' />
        </video>

        <div className='z-20'>
          <p className='flex fixed z-10 justify-center items-center w-full h-full font-serif text-9xl text-gray-300 underline underline-offset-4 animate-pulse sm:text-6xl'>
            V I N T A G E
          </p>
          <p className='flex fixed z-10 justify-center items-center mt-28  w-full h-full font-serif text-6xl text-gray-200 animate-pulse sm:text-3xl'>
            Hair Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;
