"use client"
import type { Metadata } from "next";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Geist, Geist_Mono } from "next/font/google";

import React from "react";

import NavBar from "../../components/NavBar";


import "./globals.css";
import { Suspense } from "react";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>
)
 { const [client] = React.useState(new QueryClient());
  

  return (
    
    <html lang="en" className="dark" >
   <QueryClientProvider client={client}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <NavBar/>
        <main style={{ padding: '1rem' }}>
         {children}
        </main> 

      </body>
   </QueryClientProvider>
    
    </html>
  );
}
