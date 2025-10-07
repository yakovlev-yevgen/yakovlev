import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

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

export function generateMetadata(): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const title = 'Евгений Яковлев';
  const description =
    'Сертифицированный практикующий регрессолог и гипнотерапевт с глубоким пониманием ума и подсознания. Миссия - помогать людям достигать гармонии, здоровья и благополучия!';

  return {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    openGraph: {
      locale: 'ru',
    },
    manifest: '/meta/site.webmanifest',
    robots: 'all',
    alternates: {
      canonical: baseUrl,
    },
    keywords: [
      'регрессолог',
      'гипнотерапевт',
      'диагностика',
      'финансы',
      'предназначение',
      'родовые программы',
      'родовые сценарии',
      'родовая память',
      'блоки мышления',
      'психотравмы',
      'смысл жизни',
      'самопознание',
      'саморазвитие',
      'личностный рост',
      'постановка цели',
      'отношения',
      'страхи',
      'панические атаки',
      'фобии',
    ],
    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/meta/favicon.ico',
      apple: '/meta/apple-touch-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head />
      <body
        className={`${kurier.variable} ${roboto.variable} flex flex-col justify-start h-screen pt-[60px]`}
      >
        {/* ✅ Google Ads (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17502210542"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17502210542');
            `,
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
