'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProductDetailClient({ product }: { product: any }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  return (
    <div className="max-w-[1500px] mx-auto p-4 md:p-8 font-sans bg-white text-[#0F1111]">
      {/* Top Navigation / Breadcrumbs */}
      <nav className="text-xs mb-4 flex gap-2 items-center text-[#565959]">
        <Link href="/" className="hover:text-[#C7511F] hover:underline">Back to results</Link>
        <span>|</span>
        <span className="capitalize">{product.category}</span>
      </nav>

      {/* Main Container: 3 Columns on Desktop */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* COLUMN 1: IMAGE GALLERY (Left) */}
        <div className="w-full lg:w-[40%] flex gap-4">
          {/* Vertical Thumbnails */}
          <div className="hidden md:flex flex-col gap-2">
            {product.images.map((img: string, i: number) => (
              <div 
                key={i} 
                onMouseEnter={() => setMainImage(img)}
                className={`w-12 h-12 border-2 rounded-md overflow-hidden cursor-pointer ${mainImage === img ? 'border-[#e77600] shadow-sm' : 'border-gray-200 hover:border-[#e77600]'}`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-contain p-1" />
              </div>
            ))}
          </div>
          {/* Main Large Image */}
          <div className="flex-grow flex justify-center items-start">
            <div className="max-w-[500px] w-full aspect-square flex items-center justify-center p-2">
              <img 
                src={mainImage} 
                alt={product.title} 
                className="max-w-full max-h-full object-contain transition-opacity duration-300" 
              />
            </div>
          </div>
        </div>

        {/* COLUMN 2: CENTER INFO (Middle) */}
        <div className="w-full lg:w-[40%] space-y-3">
          <div className="border-b pb-3">
            <h1 className="text-2xl font-medium leading-tight mb-1">{product.title}</h1>
            <p className="text-[#007185] text-sm hover:underline cursor-pointer">Visit the {product.brand} Store</p>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium">{product.rating}</span>
              <div className="flex text-[#FFA41C] text-sm">
                {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-[#007185] text-sm hover:text-[#C7511F] cursor-pointer hover:underline">852 ratings</span>
            </div>
          </div>

          <div className="py-2 border-b">
             <div className="flex items-baseline">
                <span className="text-sm align-top mt-1">£</span>
                <span className="text-3xl font-medium">{product.price}</span>
             </div>
             <p className="text-sm text-[#565959] mt-1">Inclusive of all taxes</p>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <h3 className="font-bold text-base">About this item</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm leading-relaxed text-[#0F1111]">
                <li>{product.description}</li>
                <li><span className="font-bold">Category:</span> {product.category}</li>
                <li><span className="font-bold">Warranty:</span> {product.warrantyInformation}</li>
                <li><span className="font-bold">Shipping:</span> {product.shippingInformation}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMN 3: BUY BOX (Right) */}
        <div className="w-full lg:w-[20%]">
          <div className="border border-[#D5D9D9] rounded-lg p-4 space-y-4 sticky top-4 shadow-sm">
            <div className="flex items-baseline">
                <span className="text-sm align-top">£</span>
                <span className="text-2xl font-medium">{product.price}</span>
            </div>
            
            <div className="text-sm space-y-2">
              <p className="text-[#007185] hover:text-[#C7511F] cursor-pointer hover:underline">FREE delivery</p>
              <p className="font-bold">{(new Date()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
              <p className="text-[#565959]">Deliver to Liverpool L4 - Update location</p>
            </div>

            <p className="text-[#B12704] text-lg font-medium">Only {product.stock} left in stock.</p>
            
            <div className="space-y-2">
              <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2 text-sm shadow-sm transition active:bg-[#F0B800]">
                Add to basket
              </button>
              <button className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-full py-2 text-sm shadow-sm transition active:bg-[#ED8100]">
                Buy Now
              </button>
            </div>

            <div className="text-xs text-[#565959] space-y-1 pt-2">
              <div className="flex justify-between"><span>Payment</span><span className="text-[#007185]">Secure transaction</span></div>
              <div className="flex justify-between"><span>Ships from</span><span>Amazon.acp</span></div>
              <div className="flex justify-between"><span>Sold by</span><span className="text-[#007185]">{product.brand}</span></div>
              <div className="flex justify-between"><span>Returns</span><span className="text-[#007185]">Returnable within 30 days</span></div>
            </div>
          </div>
        </div>

        
      </div>
      {/* --- CUSTOMER REVIEWS SECTION --- */}
      <div className="mt-12 border-t border-gray-200 pt-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Side: Rating Summary */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xl font-bold mb-2">Customer reviews</h2>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-[#FFA41C] text-lg">
                {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-lg font-medium">{product.rating} out of 5</span>
            </div>
            <p className="text-sm text-[#565959] mb-4">1,240 global ratings</p>
            
            {/* Simple Star Progress Bars (Amazon Style) */}
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4 text-sm mb-2 hover:bg-gray-50 p-1 cursor-pointer group">
                <span className="text-[#007185] group-hover:text-[#C7511F] min-w-[40px] underline">{star} star</span>
                <div className="flex-grow h-5 bg-[#F0F2F2] border border-gray-300 rounded-sm overflow-hidden">
                  <div 
                    className="h-full bg-[#FFA41C] border border-[#DE7921]" 
                    style={{ width: `${star === 5 ? 70 : star === 4 ? 15 : 5}%` }}
                  ></div>
                </div>
                <span className="text-[#007185] group-hover:text-[#C7511F] min-w-[30px] underline">{star === 5 ? '70%' : star === 4 ? '15%' : '5%'}</span>
              </div>
            ))}
          </div>

          {/* Right Side: Individual Reviews */}
          <div className="md:col-span-8 lg:col-span-9 space-y-8">
            <h3 className="text-lg font-bold">Top reviews from United Kingdom</h3>
            
            {product.reviews?.map((review: any, index: number) => (
              <div key={index} className="animate-fadeIn">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs border border-gray-300 shadow-inner">
                    {review.reviewerName.charAt(0)}
                  </div>
                  <span className="text-sm font-normal text-[#0F1111]">{review.reviewerName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFA41C] text-xs">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <span className="text-sm font-bold text-[#0F1111]">Verified Purchase</span>
                </div>

                <p className="text-xs text-[#565959] mt-1">
                  Reviewed on {new Date(review.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>

                <p className="text-sm text-[#0F1111] mt-2 leading-relaxed">
                  {review.comment}
                </p>

               <div className="flex items-center gap-4 mt-3">
                  {/* --- UPDATED: Small, Compact Helpful Button --- */}
                  <button className="text-xs px-5 py-1.5 border border-[#D5D9D9] rounded-full shadow-inner bg-white hover:bg-[#F7FAFA] active:bg-[#EDF2F2] transition-colors font-normal text-[#0F1111] hover:border-[#ADB5BD]">
                    Helpful
                  </button>
                  <span className="text-xs text-[#565959] border-l pl-4 cursor-pointer hover:underline">Report</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}