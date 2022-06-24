import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../components/Header';

const AvoidSSRMovieSlider = dynamic(() => import('../components/MovieSlider'), { ssr: false });

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <AvoidSSRMovieSlider />
      </div>
    </div>
  );
};

export default Home;
