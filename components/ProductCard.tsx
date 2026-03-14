'use client'

import RatingSummaryHover from "./RatingSummaryHover"

function getRatingBreakdown(reviews: { rating: number }[]) {

  const counts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  }

  reviews.forEach((r) => {
    if (counts[r.rating as 1 | 2 | 3 | 4 | 5] !== undefined) {
      counts[r.rating as 1 | 2 | 3 | 4 | 5]++
    }
  })

  const total = reviews.length

  const percentages = {
    5: Math.round((counts[5] / total) * 100),
    4: Math.round((counts[4] / total) * 100),
    3: Math.round((counts[3] / total) * 100),
    2: Math.round((counts[2] / total) * 100),
    1: Math.round((counts[1] / total) * 100)
  }

  return { counts, percentages, total }
}
type Review = {
  rating: number
  comment: string
}

type Product = {
  id: number
  title: string
  description:String
  shippingInformation:String
  price: number
  thumbnail: string
  rating: number
  reviews: Review[]
}


export default function ProductCard({product}:{product:Product}) {
const { percentages, total } = getRatingBreakdown(product.reviews)
  

  return (

    <div className="flex gap-6 border-b py-6 max-w-[1000px]">

      {/* Image */}

      <div className="w-[250px] flex items-center justify-center">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-[160px] object-contain"
        />

      </div>



      {/* Details */}

      <div className="flex flex-col flex-1">

        <h2 className="text-lg text-blue-700 hover:underline cursor-pointer">

          {product.title}

        </h2>

 <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-700 text-sm mt-1">{product.description}</p>

 </div>
        <div className="flex items-center gap-2 mt-1">

          <span>{product.rating}</span>

          <RatingSummaryHover
  rating={product.rating}
  totalRatings={total}
  breakdown={percentages}
/>

         
        </div>


        <div className="text-3xl mt-2">
          £{product.price}
        </div>


        <p className="text-sm mt-1">
          FREE delivery <b>{product.shippingInformation}</b>
        </p>
<div className="mt-2 w-max">
  <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-3 py-1 rounded-full">
    Add to Basket
  </button>
</div>
      </div>

    </div>

  )
}