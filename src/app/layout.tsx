import './globals.css'
import { ReactNode } from 'react'
import CustomCursor from '@/components/CustomCursor'
import MyLogo from '@/components/MyLogo'
import MySocials from '@/components/MySocials'

import { Inter } from "next/font/google"
import Footer from '@/components/Footer'
import MainMenu from '@/components/MainMenu'


// Define the font with desired properties
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  // You can specify weight if needed
  // weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-black cursor-none {inter.className}">
        <CustomCursor />
        <MyLogo />
        <MySocials />
        <MainMenu />
        {children}
      </body>
      <Footer />
    </html>
  );
}