import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../components/Header';

const AvoidSSRMovieSlider = dynamic(() => import('../components/MovieSlider'), { ssr: false });

const Home = () => {
  return (
    <div className='-z-50 '>
      <Header />
      <AvoidSSRMovieSlider />
    </div>
  );
};

export default Home;
