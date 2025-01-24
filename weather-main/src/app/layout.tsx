import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" >
  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {/* Navbar */}
        <nav style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1>Weather App</h1>
          </div>
          <div>
            <Link href="/" style={{ margin: '0 1rem' }}>Home</Link>
            <Link href="/about" style={{ margin: '0 1rem' }}>About</Link>
            <Link href="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
          </div>
        </nav>
          {/** Search Bar */}
        <form className="display-flex container m-auto">   
         <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          {/* magnifying glass icon code */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        {/* user input code */}
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Cities" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
     </form>
        <main style={{ padding: '1rem' }}>
         {children}
        </main>
              
         
       

      </body>
    </html>
  );
}
