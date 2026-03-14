'use client'
import React from "react"
import StarRating from "./StarRating"

type RatingSummaryProps = {
  rating: number
  totalRatings: number
  breakdown: Record<number, number> // e.g., {5: 80, 4: 14, 3: 3, 2: 1, 1: 2}
}

export default function RatingSummary({ rating, totalRatings, breakdown }: RatingSummaryProps) {
  return (
    <div className="p-4 border rounded-lg w-80 bg-white shadow-sm">
      {/* Top section: stars + avg rating */}
      <div className="flex items-center gap-2">
        <StarRating rating={rating} size={24} />
        <span className="font-semibold text-lg">{rating.toFixed(1)} out of 5</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">{totalRatings.toLocaleString()} global ratings</p>

      {/* Rating breakdown bars */}
      <div className="mt-4 space-y-1">
        {[5, 4, 3, 2, 1].map((star) => {
          const percentage = breakdown[star] || 0
          return (
            <div key={star} className="flex items-center gap-2 text-sm">
              <span className="w-6">{star} star</span>
              <div className="flex-1 h-3 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-3 bg-orange-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-8 text-right">{percentage}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}