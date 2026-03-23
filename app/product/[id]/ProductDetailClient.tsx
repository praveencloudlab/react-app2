'use client';
import React, { useState } from 'react';

export default function ProductDetailClient({ product }: { product: any }) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-[1500px] mx-auto p-4 bg-white text-[#0F1111] font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="w-full lg:w-[35%] flex gap-4">
          <div className="hidden md:flex flex-col gap-2">
            {product.images.slice(0, 5).map((img: string, i: number) => (
              <img key={i} src={img} onMouseEnter={() => setMainImage(img)} 
                className={`w-12 h-12 border p-1 cursor-pointer ${mainImage === img ? 'border-[#e77600] shadow-sm' : 'border-gray-200'}`} />
            ))}
          </div>
          <div className="flex-grow border border-gray-100 p-4 flex justify-center">
            <img src={mainImage} className="max-h-[500px] object-contain" alt="product" />
          </div>
        </div>

        {/* Middle: Info */}
        <div className="w-full lg:w-[40%] space-y-4">
          <h1 className="text-2xl font-medium leading-tight">{product.title}</h1>
          <div className="text-[#007185] text-sm">Visit the {product.brand} Store</div>
          <div className="text-2xl font-medium">£{product.price}</div>
          <div className="border-t pt-4">
            <h3 className="font-bold">About this item</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
              <li>{product.description}</li>
            </ul>
          </div>
        </div>

        {/* Right: Buy Box */}
        <div className="w-full lg:w-[25%] border border-[#D5D9D9] rounded-lg p-4 bg-white h-fit shadow-sm">
          <div className="text-2xl font-medium">£{product.price}</div>
          <div className="text-[#007185] text-sm font-bold mt-2 italic">FREE delivery</div>
          <div className="text-[#B12704] text-sm font-bold mt-4">In Stock</div>
          <div className="space-y-3 mt-6">
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 rounded-full text-sm shadow-sm">Add to Basket</button>
            <button className="w-full bg-[#ffa41c] hover:bg-[#f3a847] py-2 rounded-full text-sm shadow-sm">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Reviews Section - FIXED HELPFUL BUTTON */}
      <div className="mt-12 border-t pt-8 max-w-3xl">
        <h2 className="text-xl font-bold mb-6">Customer reviews</h2>
        {product.reviews?.map((review: any, i: number) => (
          <div key={i} className="mb-8 border-b pb-4 last:border-0">
            <div className="flex items-center gap-2 mb-2 font-bold text-sm">{review.reviewerName}</div>
            <div className="text-[#FFA41C]">★★★★★ <span className="text-black font-bold ml-2">Verified Purchase</span></div>
            <p className="text-sm mt-2">{review.comment}</p>
            {/* The Fixed Button */}
            <div className="mt-4 flex items-center gap-4">
              <button className="w-fit border border-[#D5D9D9] bg-white hover:bg-[#F7FAFA] px-8 py-1 rounded-md text-xs shadow-sm text-[#0F1111]">
                Helpful
              </button>
              <span className="text-xs text-[#565959] border-l pl-4 cursor-pointer hover:underline">Report</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}