'use client';

import { LucideUsers } from 'lucide-react';
import React from 'react';

import WalletButton from '@/components/wallets/walletButton';

import DashboardLogo from '~/svg/dashboard-logo.svg';

const Header = () => {
  return (
    <nav>
      <div className='h-[140px] w-full bg-background-200 flex items-center justify-between px-[10px]'>
        <div className='flex items-center gap-x-5'>
          <DashboardLogo className='w-[88px] h-[83px]' />
          <h1 className='text-[40px] font-bold'>DOMO</h1>
        </div>
        <div className='flex items-center gap-[55px]'>
          <div className='flex items-center gap-3'>
            <LucideUsers className='w-[55px] h-[55px]' />
            <p className='text-[24px] font-bold'>0/15</p>
          </div>

          <div className='flex items-center'>
            <WalletButton />
          </div>

          <div className='flex items-center gap-[30px] pr-[85px]'>
            <StatsItem title='$/h' value='230,45' />
            <StatsItem title='$DOMO' value='568,96' />
            <StatsItem title='$SOL' value='568,96' />
          </div>
        </div>
      </div>
    </nav>
  );
};

const StatsItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className='flex h-[60px] items-center bg-black-100 rounded-[10px]'>
      <div className='bg-black-200 p-[15px] rounded-[10px] h-full flex items-center'>
        <p className='text-[24px] font-bold leading-none'>{title}</p>
      </div>
      <div className='p-[15px] w-full h-full flex items-center'>
        <p className='text-[24px] font-bold leading-none'>{value}</p>
      </div>
    </div>
  );
};

export default Header;
