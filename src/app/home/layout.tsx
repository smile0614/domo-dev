'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import '@/styles/colors.css';

import Header from '@/components/layouts/landingHeader';
import Preloader from '@/components/loaders/preloader';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageLoaded, setPageLoaded] = useState(false);

  const handlePageLoaded = () => {
    setPageLoaded(true);
  };

  const checkImagesLoaded = () => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    images.forEach((img) => {
      const image = new Image();
      image.src = img.src;

      if (image.complete) {
        loadedImages += 1;
      } else {
        image.onload = () => {
          loadedImages += 1;
          if (loadedImages === images.length) {
            handlePageLoaded();
          }
        };
      }
    });

    if (loadedImages === images.length) {
      handlePageLoaded();
    }
  };

  useEffect(() => {
    checkImagesLoaded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePageLoaded]);

  if (!pageLoaded) {
    return <Preloader />;
  }

  return (
    <div className='bg-maroon'>
      <Header />
      {children}
    </div>
  );
}
