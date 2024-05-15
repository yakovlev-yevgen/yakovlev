import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
  weight: ['300', '400'],
  style: ['normal'],
  variable: '--font-roboto',
});

const kurier = localFont({
  src: [
    {
      path: '../public/fonts/Kurier-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Kurier-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-kurier',
});

export const metadata: Metadata = {
  title: 'Евгений Яковлев',
  description: 'Практикующий гипнотерапевт, регрессолог',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${kurier.variable} ${roboto.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
