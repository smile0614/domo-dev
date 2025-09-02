import React from 'react';

import ProfileIcon from '~/svg/profile.svg';

const Profile = () => {
  return (
    <div className='bg-background-600 text-white w-[275px] flex flex-col py-[28px] border border-border-100 rounded-[10px] font-inter'>
      <div className='flex items-center mb-6 px-[15px]'>
        <div className='w-[120px] h-[120px] bg-black-300 rounded-[10px] border border-border-200 mr-4 flex items-center justify-center'>
          <ProfileIcon />
        </div>
        <div>
          <h1 className='text-[17px] font-bold text-white mb-1'>CHANG CHU</h1>
          <div className='text-white text-[17px] font-medium'>LVL 8/11</div>
        </div>
      </div>
      <div className='mb-6 px-[15px]'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-white text-[15px] font-medium'>
            Progress to lvl 9
          </span>
          <div className='w-4 h-4 bg-background-300 rounded-full flex items-center justify-center'>
            <span className='text-background-600 text-[8px] font-bold'>i</span>
          </div>
        </div>
        <div className='w-full bg-background-300 rounded-full h-[5px]'>
          <div
            className='bg-white h-[5px] rounded-full'
            style={{ width: '65%' }}
          ></div>
        </div>
      </div>
      <div className='space-y-[10px] mb-6 px-[15px]'>
        <div className='bg-black-300 rounded-[7px] p-[12px] border border-border-200 flex items-center justify-between'>
          <span className='text-text-400 text-[13px] font-medium'>
            Auto collection
          </span>
          <div className='bg-background-800 rounded-full w-8 h-4 relative flex items-center justify-center'>
            <p className='text-text-600 text-[12px] font-medium'>ON</p>
          </div>
        </div>
        <div className='bg-black-300 rounded-[7px] p-[12px] border border-border-200 flex items-center justify-between'>
          <span className='text-text-400 text-[13px] font-medium'>
            Upgrade price
          </span>
          <span className='text-white text-[13px] font-bold'>$25</span>
        </div>
        <div className='bg-black-300 rounded-[7px] p-[12px] border border-border-200 flex items-center justify-between'>
          <span className='text-text-400 text-[13px] font-medium'>
            Total income multiplier
          </span>
          <span className='text-white text-[13px] font-bold'>+20%</span>
        </div>
      </div>
      <div className='px-[15px]'>
        <button className='w-full bg-white text-background-100 py-3 px-6 rounded-lg font-semibold hover:bg-background-300 transition-all active:scale-95 text-[14px]'>
          Upgrade LVL
        </button>
      </div>
    </div>
  );
};

export default Profile;
