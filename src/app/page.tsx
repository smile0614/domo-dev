'use client';

import { redirect } from 'next/navigation';
import '@/lib/env';

export default function HomePage() {
  return redirect('/home');
}
