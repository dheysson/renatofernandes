import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

 
//import header
import Header from '../components/header';

export const metadata: Metadata = {
  title: 'Renato Fernandes - Fotógrafo'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"></link>
        <Header />
        {children }
        <Analytics />
      </body>
    </html>
  )
}
