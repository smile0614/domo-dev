/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Preloader = () => {
  return (
    <div className='bg-maroon w-full h-screen z-[99999] fixed flex items-center justify-center'>
      <img
        className='xs:max-w-[50%] md:max-w-[30%] w-full'
        src='./gif/Domokun_Ninja_Anim.gif'
        alt='preloader'
      />
    </div>
  );
};

export default Preloader;
