import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-background-100 text-white h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
}
