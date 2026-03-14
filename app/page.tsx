import ProductCard from "@/components/ProductCard"

type Review = {
  rating: number
  comment: string
}
type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  rating: number
  reviews: Review[]
}

async function getProducts(): Promise<Product[]> {
  try {

    const res = await fetch("http://localhost:3000/products.json", {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Failed to fetch products")
    }

    const data = await res.json()

    return data.products

  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function Home() {

  const products = await getProducts()

  return (

    <main className="max-w-[1100px] mx-auto p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Products
      </h1>

      <div>

        {products.length > 0 ? (

          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))

        ) : (

          <p>No products found.</p>

        )}

      </div>

    </main>
  )
}