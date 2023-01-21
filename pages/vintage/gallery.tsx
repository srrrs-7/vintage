import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const AvoidSSRImageGallery = dynamic(() => import('../../components/ImageGallery'), { ssr: false });

const Gallery = () => {
  return (
    <div>
      <Header />
      <AvoidSSRImageGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
