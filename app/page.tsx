import ProductCard from "@/components/ProductCard"

async function getProducts() {

  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store"
  })

  const data = await res.json()

  return data.products
}

export default async function Home() {

  const products = await getProducts()

  return (

    <main className="max-w-[1200px] mx-auto p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map((product:any) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </main>
  )
}