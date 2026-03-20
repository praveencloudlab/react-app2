import { notFound } from "next/navigation";
import Link from 'next/link';

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const data = await res.json();
  return data.products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

// Notice the type change: params is a Promise
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // You MUST await params in Next.js 15
  const { id } = await params; 

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!res.ok) return notFound();
  const product = await res.json();

  return (
    <div style={{ padding: '20px' }}>
      <Link href="/">← Back</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width={300} />
      <p>{product.description}</p>
    </div>
  );
}