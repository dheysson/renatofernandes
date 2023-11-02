import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Archivo } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] , weight: ['100', '200', '300', '400']})
// const syne = Syne({ subsets: ['latin'] , weight: ['700']})
const archivo = Archivo({ subsets: ['latin'] , weight: ['400']});
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400']});
 
//import header
import Header from '../components/header';

//import footer
import Footer from '../components/footer';

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
      <body className={poppins.className}>
        <Header />
        {children }
        {/* <Footer /> */}
      </body>
    </html>
  )
}
