import dynamic from 'next/dynamic';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AvoidSSRMovieSlider = dynamic(() => import('../components/MovieSlider'), { ssr: false });

const Home = () => {
  return (
    <div>
      <Header />
      <AvoidSSRMovieSlider />
      <div className='pt-[410px] mt-[410px]'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
