'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#131921] text-white sticky top-0 z-50">
      {/* Top Navigation Row */}
      <div className="max-w-[1500px] mx-auto flex items-center p-2 gap-2 md:gap-4">
        
        {/* Logo - Fixed width so it doesn't shrink */}
        <Link href="/" className="flex-shrink-0 border border-transparent hover:border-white p-1 rounded-sm">
          <span className="text-xl font-bold tracking-tight">amazon<span className="text-[#febd69]">.acp</span></span>
        </Link>

        {/* SEARCH BAR - This is the fix */}
        {/* 'flex-grow' tells it to take all remaining space. 'min-w-0' prevents the one-character bug */}
        <div className="flex flex-grow items-center h-10 min-w-0 group">
          <select className="hidden md:block h-full bg-[#f3f3f3] text-gray-700 text-xs px-2 rounded-l-md border-r border-gray-300 cursor-pointer hover:bg-gray-200">
            <option>All</option>
          </select>
          
          <input 
            type="text" 
            placeholder="Search Amazon"
            className="flex-grow h-full px-4 text-black text-sm outline-none focus:ring-2 focus:ring-[#febd69] rounded-l-md md:rounded-l-none"
          />
          
          <button className="h-full bg-[#febd69] hover:bg-[#f3a847] px-3 rounded-r-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#131921]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Right Side Icons - 'flex-shrink-0' keeps them visible on mobile */}
        <div className="flex items-center gap-1 md:gap-4 flex-shrink-0 text-xs md:text-sm">
          <div className="hidden sm:block cursor-pointer border border-transparent hover:border-white p-1">
            <p>Hello, Sign in</p>
            <p className="font-bold">Account</p>
          </div>
          
          <div className="cursor-pointer border border-transparent hover:border-white p-1 flex items-center">
            <div className="relative">
               <span className="absolute -top-1 right-0 text-[#f08804] font-bold text-lg leading-none">0</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
            </div>
            <span className="hidden md:block font-bold self-end mb-1 ml-1">Basket</span>
          </div>
        </div>
      </div>

      {/* Secondary Nav Row (Optional Amazon Style) */}
      <div className="bg-[#232f3e] flex items-center p-2 text-xs md:text-sm gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="font-bold flex items-center gap-1 cursor-pointer"><span className="text-lg">≡</span> All</span>
        <span className="cursor-pointer hover:border-white border border-transparent px-1">Today's Deals</span>
        <span className="cursor-pointer hover:border-white border border-transparent px-1">Customer Service</span>
        <span className="cursor-pointer hover:border-white border border-transparent px-1">Registry</span>
        <span className="cursor-pointer hover:border-white border border-transparent px-1">Gift Cards</span>
        <span className="cursor-pointer hover:border-white border border-transparent px-1">Sell</span>
      </div>
    </header>
  );
}