import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import Header from '../../components/Header';

const AvoidSSRImageGallery = dynamic(() => import('../../components/ImageGallery'), { ssr: false });

const Gallery = () => {
  return (
    <div>
      <Header />
      <AvoidSSRImageGallery />
    </div>
  );
};

export default Gallery;
