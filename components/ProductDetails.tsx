'use client'

import RatingSummaryHover from "./RatingSummaryHover"

export default function ProductDetails({ product }: any) {

  if (!product) {
    return <p>Loading...</p>
  }

  return (

    <div className="grid grid-cols-2 gap-10">

      {/* Image */}

      <div>

        <img
          src={product.thumbnail}
          className="w-full rounded"
        />

        <div className="flex gap-3 mt-3">

          {product.images?.map((img: string, i: number) => (

            <img
              key={i}
              src={img}
              className="w-16 h-16 border rounded"
            />

          ))}

        </div>

      </div>

      {/* Details */}

      <div>

        <h1 className="text-2xl font-semibold">
          {product.title}
        </h1>

        <p className="text-gray-500 mt-1">
          Brand: {product.brand}
        </p>

        <p className="text-3xl font-bold mt-4">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <p className="mt-2">
          Category: {product.category}
        </p>

        <p>
          Stock: {product.stock}
        </p>

      </div>

    </div>

  )
}