import Link from "next/link"
import StarRating from "./StarRating"

export default function ProductCard({ product }: any) {

  const totalRatings = Math.floor(product.rating * 200) // generate total ratings dynamically

  return (
    <div className="border rounded-lg hover:shadow-lg transition w-full flex p-4 bg-white">

      {/* IMAGE LEFT */}
      <Link href={`/product/${product.id}`} className="w-[200px] flex-shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[180px] object-cover rounded"
        />
      </Link>

      {/* DETAILS RIGHT */}
      <div className="flex flex-col justify-between flex-1 ml-6">

        {/* Product info */}
        <div>
          <Link href={`/product/${product.id}`}>
            <h2 className="text-lg font-semibold hover:text-blue-600 line-clamp-2">
              {product.title}
            </h2>
          </Link>

          <p className="text-sm text-gray-500 mt-1">Brand: {product.brand}</p>

          {/* Rating: value before stars, stars, total ratings after stars */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
            <StarRating rating={product.rating} size={16} />
            <span className="text-sm text-gray-500">({totalRatings.toLocaleString()})</span>
          </div>

          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Buttons */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold">${product.price}</p>

          <div className="flex gap-3">
            <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">
              Add to Basket
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}