import React from 'react';

const MovieSlider = () => {
  return (
    <>
      <div className='flex justify-center items-center p-10 font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400'>
        <h1>Hair Studio Vintage</h1>
      </div>
      <div>
        <video
          className='flex fixed left-0 z-10 w-[100%]'
          controls
          playsInline
          webkit-playsinline
          autoPlay
          loop
          muted
        >
          <source src='vintage.mp4' type='video/mp4' />
        </video>

        <div className='z-20'>
          <p className='flex fixed z-10 justify-center w-[100%] h-[100%] font-serif text-gray-300 underline underline-offset-4 animate-pulse sm:top-[300px] sm:text-xl md:top-[380px] md:text-3xl lg:top-[400px]'>
            V I N T A G E
          </p>
          <p className='flex fixed z-10 justify-center mt-28 w-[100%]  h-[100%] font-serif text-gray-200 animate-pulse sm:top-[220px] sm:text-base md:top-[310px] md:text-xl lg:top-[350px]'>
            Hair Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;
