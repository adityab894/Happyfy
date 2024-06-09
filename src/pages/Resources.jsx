import React, { useState } from 'react';
import Corousel from '../components/Corousel';

import Navbar from "../components/Navbar";

const Resources = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    './assets/depression1.jpg',
    './assets/depression2.jpg',
    './assets/depression3.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar/>
    <Corousel/>

    </div>
  );
};

export default Resources;
