'use client';

import React from 'react';

const ShopScreen = () => {
  return (
    <div className='flex flex-col w-full items-center py-[70px] gap-[30px] max-w-[1400px] mx-auto'>
      <div className='flex justify-between w-full'>
        <h1 className='text-[32px] font-semibold text-white'>Shop</h1>
        <div className='flex gap-[15px]'>
          <input
            type='text'
            className='bg-[#5F5F5F] rounded-[7px] px-3 h-[35px] border border-[#4E4E4E] flex items-center placeholder:text-[#B9B9B9] text-[13px] font-medium p-[10px] focus-visible:ring-0 focus-visible:outline-none'
            placeholder='Search tools...'
            value=''
          />
          <input
            type='text'
            className='bg-[#5F5F5F] rounded-[7px] px-3 h-[35px] border border-[#4E4E4E] flex items-center placeholder:text-[#B9B9B9] text-[13px] font-medium p-[10px] focus-visible:ring-0 focus-visible:outline-none'
            placeholder='Filter by profession: All'
            value=''
          />
          <div className='bg-[#5F5F5F] rounded-[7px] px-3 h-[35px] gap-2 border border-[#4E4E4E] flex items-center placeholder:text-[#B9B9B9] text-[13px] font-medium p-[10px]'>
            <input type='checkbox' className='rounded' />
            <label
              htmlFor='checkbox'
              className='cursor-pointer text-[13px] font-medium text-[#B9B9B9]'
            >
              Only Affordable
            </label>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-10 w-full'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[15px]'
          >
            <div className='flex gap-[10px] items-center'>
              <div className='w-[50px] h-[50px] rounded-[10px] bg-[#616161]'></div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-[14px] text-white font-semibold'>
                  Desktop PC
                </h1>
                <p className='text-[10px] text-[#CDCDCD] font-medium'>
                  Tool info
                </p>
              </div>
            </div>
            <div className='flex gap-[10px] w-full'>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Cost
                </div>
                <div className='text-[11px] font-semibold text-white'>$60</div>
              </div>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Income
                </div>
                <div className='text-[11px] font-semibold text-white'>
                  $0.020/h
                </div>
              </div>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Multiplier
                </div>
                <div className='text-[11px] font-semibold text-white'>
                  x1.21
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-[10px] font-medium text-[#CDCDCD]'>
                Compatible with
              </p>
              <div className='bg-[#CFCFCF] rounded-full h-4 w-[75px] flex items-center justify-center text-[10px] font-medium text-[#686868]'>
                Bruteforcer
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[5px]'>
                <div className='rounded-[7px] cursor-pointer active:scale-95 border border-[#ABABAB] w-[21px] h-[17px] bg-[#7D7D7D] flex items-center justify-center'>
                  -
                </div>
                <div className='bg-[#5F5F5F] border border-[#4E4E4E] rounded-[7px] cursor-pointer active:scale-95 w-[28px] h-[22px] flex items-center justify-center text-[11px] font-medium text-white'>
                  1
                </div>
                <div className='rounded-[7px] cursor-pointer active:scale-95 border border-[#ABABAB] w-[21px] h-[17px] bg-[#7D7D7D] flex items-center justify-center'>
                  +
                </div>
              </div>
              <div className='flex items-center gap-[5px]'>
                <p className='text-[10px] text-[#CDCDCD] font-medium'>
                  = 30 DOMO
                </p>
                <button className='w-[92px] h-[25px] flex items-center rounded-[7px] cursor-pointer justify-center bg-[#D8D8D8] active:scale-95'>
                  <p className='font-semibold text-[13px] text-[#535353]'>
                    Buy
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-[10px] w-full max-w-[1065px] rounded-[7px] bg-[#5F5F5F] border border-[#4E4E4E] flex items-center justify-between py-[11px] px-[15px]'>
        <div className='flex gap-1'>
          <div className='text-[11px] font-medium text-[#B9B9B9]'>
            Selected:
          </div>
          <div className='text-[11px] font-medium text-white'>
            2 X Desktop PC
          </div>
        </div>
        <div className='flex gap-[10px] items-center'>
          <div className='flex gap-1'>
            <div className='text-[11px] font-medium text-[#B9B9B9]'>Total:</div>
            <div className='text-[11px] font-medium text-white'>
              $60 = 60 DOMO
            </div>
          </div>
          <button className='w-[92px] h-[25px] flex items-center rounded-[7px] cursor-pointer justify-center bg-[#D8D8D8] active:scale-95'>
            <p className='font-semibold text-[13px] text-[#535353]'>Checkout</p>
          </button>
        </div>
      </div>
      <div className='pt-10 flex gap-[17px] items-center'>
        <div className='rounded-[10px] bg-[#C1C1C1] cursor-pointer active:scale-95 flex items-center justify-center w-10 h-10'>
          <div className='text-[#4C4C4C] text-[20px] font-semibold'>1</div>
        </div>
        <div className='rounded-[10px] bg-[#F7F7F7] cursor-pointer active:scale-95 flex items-center justify-center w-[45px] h-[45px]'>
          <div className='text-[#4C4C4C] text-[20px] font-semibold'>2</div>
        </div>
        <div className='rounded-[10px] bg-[#C1C1C1] cursor-pointer active:scale-95 flex items-center justify-center w-10 h-10'>
          <div className='text-[#4C4C4C] text-[20px] font-semibold'>3</div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
