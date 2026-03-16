import ProductCard from "@/components/ProductCard"

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" })
  const data = await res.json()
  return data.products
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="max-w-[1100px] mx-auto p-6">
<div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded text-center text-xl font-semibold">
 Products Page...
</div>

<br/>
      {/* Stack products vertically, each one full width */}
      <div className="flex flex-col space-y-6">
        {products.map((product: any) => (
          <div key={product.id} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  )
}