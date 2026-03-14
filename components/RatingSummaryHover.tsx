'use client'

import { useState } from "react"
import StarRating from "./StarRating"

type Props = {
  rating: number
  totalRatings: number
  breakdown: Record<number, number>
}

export default function RatingSummaryHover({ rating, totalRatings, breakdown }: Props) {

  const [hover, setHover] = useState(false)

  return (

    <div
      className="relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <StarRating rating={rating} />

      {hover && (

        <div className="absolute top-7 left-0 bg-white border shadow-lg p-4 w-72 rounded z-50">

          <div className="flex items-center gap-2">

            <StarRating rating={rating} size={20} />

            <span className="font-semibold">
              {rating} out of 5
            </span>

          </div>

          <p className="text-sm text-gray-500">
            {totalRatings} global ratings
          </p>

          <div className="mt-3 space-y-1">

            {[5,4,3,2,1].map((star)=>{

              const percent = breakdown[star] || 0

              return(

                <div key={star} className="flex items-center gap-2 text-sm">

                  <span className="w-12">{star} star</span>

                  <div className="flex-1 h-3 bg-gray-200 rounded">

                    <div
                      className="bg-orange-500 h-3 rounded"
                      style={{width:`${percent}%`}}
                    />

                  </div>

                  <span className="w-10 text-right">
                    {percent}%
                  </span>

                </div>

              )

            })}

          </div>

        </div>

      )}

    </div>

  )
}