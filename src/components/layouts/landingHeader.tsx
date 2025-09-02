'use client';

import React, { useState } from 'react';

import Button from '@/components/buttons';
import LoginModal from '@/components/layouts/loginModal';
import NavigationMenu from '@/components/layouts/menu';

const LandingHeader = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className='left-0 fixed right-0 z-20 bg-[#1A1A1A] shadow-lg'>
      <div className='w-full xs:max-w-[94%] xl:max-w-[77.5rem] mx-auto px-4 h-16 flex items-center justify-between'>
        <NavigationMenu />
        <div className='flex items-center gap-4 ml-auto'>
          <Button
            onClick={() => setIsLoginModalOpen(true)}
            variant='secondary'
            text='START PLAYING'
          />

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
