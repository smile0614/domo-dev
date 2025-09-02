'use client';

import React from 'react';

const WorkScreen = () => {
  return (
    <div className='flex flex-col w-full items-center py-[70px] gap-[30px] max-w-[1400px] mx-auto'>
      <div className='flex justify-between w-full'>
        <h1 className='text-[32px] font-semibold text-white'>Work Center</h1>
      </div>
      <div className='flex gap-[10px] w-full'>
        <button className='bg-[#FDFDFD] active:scale-95 w-[150px] h-[35px] rounded-[7px] flex items-center justify-center'>
          <div className='text-[#3B3B3B] font-semibold text-[13px]'>
            Hire Employees
          </div>
        </button>
        <button className='bg-[#5F5F5F] active:scale-95 w-[150px] h-[35px] rounded-[7px] flex items-center justify-center'>
          <div className='text-white font-semibold text-[13px]'>
            Professions Library
          </div>
        </button>
      </div>
      <div className='max-w-[1400px] w-full flex items-center justify-between gap-[70px] h-[47px] bg-[#5F5F5F] border border-[#4E4E4E] p-[15px] rounded-[7px]'>
        <div className='flex gap-1 items-center text-[11px] font-medium text-[#B9B9B9]'>
          <div>Office capacity:</div>
          <div className='text-white'>7/10</div>
          <div>employees:</div>
          <div className='text-white'>|</div>
          <div>Capacity left:</div>
          <div className='text-white'>3</div>
        </div>
        <div className='flex-1 rounded-[5px] h-[5px] bg-[#B2B2B2] relative overflow-hidden'>
          <div className='absolute left-0 h-[5px] w-[70%] bg-white'></div>
        </div>
        <div className='font-medium text-[11px] text-[#B9B9B9]'>
          Hiring increases capacity usage. Professions are trained on the next
          tab.
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <h1 className='text-[24px] font-semibold text-white'>
          Hire new employees
        </h1>
        <div className='flex gap-[15px]'>
          <input
            type='text'
            className='bg-[#5F5F5F] rounded-[7px] w-[245px] px-3 h-[35px] border border-[#4E4E4E] flex items-center placeholder:text-[#B9B9B9] text-[13px] font-medium p-[10px] focus-visible:ring-0 focus-visible:outline-none'
            placeholder='Search name or type...'
            value=''
          />
          <div className='bg-[#5F5F5F] rounded-[7px] w-[245px] px-3 h-[35px] gap-2 border border-[#4E4E4E] flex items-center placeholder:text-[#B9B9B9] text-[13px] font-medium p-[10px]'>
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
                  Employee name
                </h1>
                <p className='text-[10px] text-[#CDCDCD] font-medium'>LVL 1</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-[10px] w-full'>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Hire Cost
                </div>
                <div className='text-[11px] font-semibold text-white'>$4</div>
              </div>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Stability
                </div>
                <div className='text-[11px] font-semibold text-white'>60%</div>
              </div>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Shift duration
                </div>
                <div className='text-[11px] font-semibold text-white'>12h</div>
              </div>
              <div className='rounded-[7px] border border-[#4E4E4E] bg-[#5F5F5F] p-[10px] flex w-full flex-col'>
                <div className='text-[11px] font-medium text-[#B9B9B9]'>
                  Default profession
                </div>
                <div className='text-[11px] font-semibold text-white'>
                  Salaried employee (no tool)
                </div>
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
                  = 4 DOMO
                </p>
                <button className='w-[92px] h-[25px] flex items-center rounded-[7px] cursor-pointer justify-center bg-[#D8D8D8] active:scale-95'>
                  <p className='font-semibold text-[13px] text-[#535353]'>
                    Hire
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
            2 X Employees
          </div>
        </div>
        <div className='flex gap-[10px] items-center'>
          <div className='flex gap-1'>
            <div className='text-[11px] font-medium text-[#B9B9B9]'>Total:</div>
            <div className='text-[11px] font-medium text-white'>
              $8 = 8 DOMO
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

export default WorkScreen;
