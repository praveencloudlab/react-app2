'use client'

type Props = {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 18 }: Props) {

  const stars = []

  for (let i = 1; i <= 5; i++) {

    if (i <= Math.floor(rating)) {

      stars.push(
        <span key={i} className="text-orange-500" style={{fontSize: size}}>★</span>
      )

    } else if (i - rating < 1) {

      const percent = (rating - Math.floor(rating)) * 100

      stars.push(
        <span key={i} className="relative inline-block" style={{fontSize: size}}>

          <span
            className="absolute overflow-hidden text-orange-500"
            style={{width: `${percent}%`}}
          >
            ★
          </span>

          <span className="text-gray-300">★</span>

        </span>
      )

    } else {

      stars.push(
        <span key={i} className="text-gray-300" style={{fontSize: size}}>★</span>
      )

    }

  }

  return <div className="flex gap-0.5">{stars}</div>
}