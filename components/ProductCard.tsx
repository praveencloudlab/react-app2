'use client'

import Link from "next/link"

export default function ProductCard({ product }: any) {

  return (

    <Link href={`/product/${product.id}`}>

      <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition">

        <img
          src={product.thumbnail}
          className="w-full h-40 object-cover mb-2"
        />

        <h2 className="font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {product.brand}
        </p>

        <p className="font-bold mt-2">
          ${product.price}
        </p>

      </div>

    </Link>

  )
}