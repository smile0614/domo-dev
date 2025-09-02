/* eslint-disable @next/next/no-img-element */
import { Plus } from 'lucide-react';
import React from 'react';

import Icon8 from '~/svg/icon8.svg';
import Icon9 from '~/svg/icon9.svg';
import Icon10 from '~/svg/icon10.svg';

const Workspace = () => {
  return (
    <div className='flex-1 h-full flex flex-col max-w-[1036px]'>
      <div className='w-full bg-background-900 py-[20px] px-[30px] flex items-center justify-start gap-[18px]'>
        <p className='text-[24px] font-bold text-white'>Offices:</p>
        <div className='flex gap-[18px] items-center'>
          <button className='rounded-[10px] bg-[#C1C1C1] w-10 h-10 flex items-center justify-center active:scale-95 transition-all cursor-pointer'>
            <p className='text-[20px] font-semibold text-[#4C4C4C]'>1</p>
          </button>
          <button className='rounded-[10px] bg-[#F7F7F7] w-[45px] h-[45px] flex items-center justify-center active:scale-95 transition-all cursor-pointer'>
            <p className='text-[20px] font-semibold text-[#4C4C4C]'>2</p>
          </button>
          <button className='rounded-[10px] bg-[#C1C1C1] w-10 h-10 flex items-center justify-center active:scale-95 transition-all cursor-pointer'>
            <p className='text-[20px] font-semibold text-[#4C4C4C]'>3</p>
          </button>
          <button className='rounded-[10px] border border-[#F7F7F7] w-10 h-10 flex items-center justify-center active:scale-95 transition-all cursor-pointer'>
            <Plus className='w-[20px] h-[20px] text-[#F7F7F7]' />
          </button>
        </div>
      </div>
      <div className='relative'>
        <img
          src='/images/workspace.png'
          alt='workspace'
          className='w-full h-full max-h-[500px] grayscale'
        />
        <div className='absolute top-[28%] left-[12%]'>
          <Icon8 className='w-[114px] h-[92px]' />
        </div>
        <div className='absolute top-[17%] left-[52%]'>
          <Icon9 className='w-[168px] h-[156px]' />
        </div>
        <div className='absolute top-[39%] left-[65%]'>
          <Icon10 className='w-[149px] h-[140px]' />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
