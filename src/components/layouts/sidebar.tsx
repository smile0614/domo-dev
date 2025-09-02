'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

const menuItems = [
  {
    label: 'base',
    href: '/dashboard/base',
  },
  {
    label: 'inventory',
    href: '/dashboard/inventory',
    isDisabled: true,
  },
  {
    label: 'shop',
    href: '/dashboard/shop',
  },
  {
    label: 'work center',
    href: '/dashboard/work-center',
  },
  {
    label: 'bank',
    href: '/dashboard/bank',
  },
  {
    label: 'bruteforce',
    href: '/dashboard/bruteforce',
    isDisabled: true,
  },
  {
    label: 'leader board',
    href: '/dashboard/leader-board',
    isDisabled: true,
  },
];
const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='w-[102px] gap-[55px] flex h-full items-center flex-col justify-start bg-background-200 py-[35px]'>
      {menuItems.map((item, index) => (
        <div
          className={cn(
            'w-full flex items-center justify-center relative h-[64px] group',
            item.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
          )}
          key={index}
        >
          <div
            className={cn(
              'w-[7px] h-full bg-white absolute opacity-0 left-0 rounded-r-full transition-all duration-300 group-hover:opacity-100',
              pathname === item.href && 'opacity-100'
            )}
          ></div>
          <div
            className='w-[58px] h-[58px] bg-background-300 flex items-center justify-center'
            onClick={() => !item.isDisabled && router.push(item.href)}
          >
            <p className='text-[8px] font-semibold text-text-100'>
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
