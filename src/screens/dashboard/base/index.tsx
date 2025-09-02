'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

import Office from '@/screens/dashboard/base/components/office';
import Profile from '@/screens/dashboard/base/components/profile';
import Workspace from '@/screens/dashboard/base/components/workspace';

const BaseScreen = () => {
  return (
    <div className='flex flex-col w-full items-center py-[44px] gap-[35px]'>
      <div className='flex flex-col gap-[22px] items-center'>
        <div className='flex gap-[220px]'>
          <button className='bg-background-400 w-[320px] h-[100px] rounded-[10px] hover:bg-background-300 transition-all active:scale-95 cursor-pointer flex items-center justify-center'>
            <p className='text-text-200 text-[32px] font-semibold uppercase'>
              news
            </p>
          </button>
          <button className='bg-background-400 w-[320px] h-[100px] rounded-[10px] hover:bg-background-300 transition-all active:scale-95 cursor-pointer flex items-center justify-center'>
            <p className='text-text-200 text-[32px] font-semibold uppercase'>
              event
            </p>
          </button>
          <button className='bg-background-400 w-[320px] h-[100px] rounded-[10px] hover:bg-background-300 transition-all active:scale-95 cursor-pointer flex items-center justify-center'>
            <p className='text-text-200 text-[32px] font-semibold uppercase'>
              sale
            </p>
          </button>
        </div>
        <div className='flex items-center gap-5 cursor-pointer'>
          <ChevronLeft className='w-[25px] h-[25px] text-background-500 hover:text-background-300 transition-all' />
          <div className='rounded-full w-[15px] h-[7px] bg-background-500 hover:bg-background-300 transition-all'></div>
          <div className='rounded-full w-[31px] h-[7px] bg-background-500 hover:bg-background-300 transition-all'></div>
          <div className='rounded-full w-[15px] h-[7px] bg-background-500 hover:bg-background-300 transition-all'></div>
          <ChevronRight className='w-[25px] h-[25px] text-background-500 hover:text-background-300 transition-all' />
        </div>
      </div>
      <div className='flex justify-center gap-5 w-full px-[88px] items-start'>
        <Office />
        <Workspace />
        <Profile />
      </div>
    </div>
  );
};

export default BaseScreen;
