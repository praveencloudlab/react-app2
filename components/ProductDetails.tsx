'use client'

import RatingSummaryHover from "./RatingSummaryHover"

function generateRatingBreakdown(rating: number) {

  const five = Math.round((rating / 5) * 60)
  const four = Math.round((rating / 5) * 25)
  const three = Math.round((rating / 5) * 10)
  const two = Math.round((rating / 5) * 3)
  const one = 100 - (five + four + three + two)

  return {
    5: five,
    4: four,
    3: three,
    2: two,
    1: one
  }
}

export default function ProductDetails({ product }: any) {

  if (!product) return null
  const breakdown = generateRatingBreakdown(product.rating)

  const totalRatings = Math.floor(product.rating * 320)





  return (

    <div className="grid grid-cols-2 gap-10">

      {/* Image Section */}

      <div>

        <img
          src={product.thumbnail}
          className="w-full rounded"
        />

        <div className="flex gap-3 mt-3">

          {product.images?.map((img:string,i:number)=>(
            <img
              key={i}
              src={img}
              className="w-16 h-16 border rounded"
            />
          ))}

        </div>

      </div>


      {/* Product Info */}

      <div>

        <h1 className="text-2xl font-semibold">
          {product.title}
        </h1>

        <p className="text-gray-500 mt-1">
          Brand: {product.brand}
        </p>


        {/* Amazon style rating */}

        <div className="mt-3">

           <RatingSummaryHover
          rating={product.rating}
          totalRatings={totalRatings}
          breakdown={breakdown}
        />

        </div>


        <p className="text-3xl font-bold mt-4">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <div className="mt-4 text-sm space-y-1">

          <p>
            <b>Category:</b> {product.category}
          </p>

          <p>
            <b>Stock:</b> {product.stock}
          </p>

          <p>
            <b>Discount:</b> {product.discountPercentage}%
          </p>

        </div>

        <button className="mt-6 bg-yellow-400 px-6 py-2 rounded font-semibold hover:bg-yellow-500">
          Add to Basket
        </button>

      </div>

    </div>

  )
}