// app/product/[id]/page.tsx

export async function generateStaticParams() {
  // 1. Fetch data from your real API or Database
  const response = await fetch('https://api.example.com/products'); 
  const products = await response.json();

  // 2. Map the data to the format Next.js expects: [{ id: '1' }, { id: '2' }]
  // Note: 'id' must be a string
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // You usually fetch the specific product data again here for the UI
  const res = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <span className="text-green-600">${product.price}</span>
    </main>
  );
}