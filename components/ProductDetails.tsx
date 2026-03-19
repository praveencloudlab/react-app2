'use client'

import RatingSummaryHover from "./RatingSummaryHover"
import StarRating from "./StarRating"

// reviews
type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  brand: string
  category: string
  stock: number
  thumbnail: string
  images: string[]
  reviews?: Review[]
}

export default function ProductDetails({ product }: { product: Product }) {

  // Safe reviews fallback
  const reviews = product.reviews ?? []

  // Generate rating breakdown from reviews
  const generateRatingBreakdown = (reviews: Review[]) => {

    const counts = {5:0,4:0,3:0,2:0,1:0}

    reviews.forEach((rev)=>{
      counts[rev.rating as 1|2|3|4|5]++
    })

    const total = reviews.length || 1

    return {
      5: Math.round((counts[5] / total) * 100),
      4: Math.round((counts[4] / total) * 100),
      3: Math.round((counts[3] / total) * 100),
      2: Math.round((counts[2] / total) * 100),
      1: Math.round((counts[1] / total) * 100)
    }
  }

  const breakdown = generateRatingBreakdown(reviews)
  const totalRatings = reviews.length

  // Dynamic extra info
  const warrantyInformation = `${1 + (product.id % 3)} year manufacturer warranty`

  const shippingInformation =
    product.stock > 0
      ? `Free delivery in ${2 + (product.id % 4)} business days`
      : "Delivery unavailable"

  const availabilityStatus =
    product.stock > 0 ? "In Stock" : "Out of Stock"

  return (

    <div className="max-w-[900px] mx-auto p-6 space-y-6 bg-white">

      {/* Title */}
      <h1 className="text-2xl font-semibold">
        {product.title}
      </h1>

      {/* Images */}
      <div className="flex gap-3 overflow-x-auto">

        {product.images.map((img, i) => (

          <img
            key={i}
            src={img}
            alt={product.title}
            className="w-48 h-48 object-cover rounded"
          />

        ))}

      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3">

        {/* Rating */}
        <div className="flex items-center gap-2">

          <span className="font-medium">
            {product.rating.toFixed(1)}
          </span>

          <RatingSummaryHover
            rating={product.rating}
            totalRatings={totalRatings}
            breakdown={breakdown}
          />

          <span className="text-gray-500">
            ({totalRatings} ratings)
          </span>

        </div>

        {/* Price */}
        <p className="text-3xl font-bold">
          ${product.price}
        </p>

        {/* Availability */}
        <p
          className={
            availabilityStatus === "In Stock"
              ? "text-green-600 font-medium"
              : "text-red-600 font-medium"
          }
        >
          {availabilityStatus}
        </p>

        {/* Warranty */}
        <p className="text-gray-700">
          Warranty: {warrantyInformation}
        </p>

        {/* Shipping */}
        <p className="text-gray-700">
          Shipping: {shippingInformation}
        </p>

        {/* Description */}
        <p className="text-gray-800">
          {product.description}
        </p>

      </div>

      {/* Reviews */}
      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-3">
          Customer Reviews
        </h2>

        <div className="space-y-4">

          {reviews.length === 0 && (
            <p className="text-gray-500">
              No reviews available.
            </p>
          )}

          {reviews.map((rev, i) => (

            <div
              key={i}
              className="border p-4 rounded"
            >

              <div className="flex items-center gap-2">

                <StarRating
                  rating={rev.rating}
                  size={16}
                />

                <span className="text-sm font-medium">
                  {rev.reviewerName}
                </span>

              </div>

              <p className="text-gray-700 mt-1">
                {rev.comment}
              </p>

              <p className="text-xs text-gray-400">
                {new Date(rev.date).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}