import React from 'react';

const MovieSlider = () => {
  return (
    <>
      <div>
        <video className='fixed top-0 left-0 -z-50 w-full h-auto' playsInline autoPlay muted loop>
          <source src='vintage.mp4' type='video/mp4' />
        </video>

        <div className='z-10'>
          <p className='flex absolute z-10 justify-center pt-64 mt-20 w-full h-full font-serif text-6xl text-gray-200 animate-pulse'>
            Hair Studio
          </p>
          <p className='flex absolute z-10 justify-center items-center w-full h-full font-serif text-9xl text-gray-300 underline underline-offset-4 animate-pulse'>
            V I N T A G E
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;
