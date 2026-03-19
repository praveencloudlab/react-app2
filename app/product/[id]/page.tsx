import ProductDetails from "@/components/ProductDetails"

async function getProduct(id: string) {

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store"
  })

  return res.json()
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params

  const product = await getProduct(id)

  return (

    <main className="max-w-[1200px] mx-auto p-6">

      <ProductDetails product={product} />

    </main>

  )
}