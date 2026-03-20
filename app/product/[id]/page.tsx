import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const data = await res.json();
  return data.products.map((product: any) => ({
    id: product.id.toString(),
  }));
}
export default async function ProductPage({ params }: { params: any }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!res.ok) return notFound();
  const product = await res.json();

  return <ProductDetailClient product={product} />;
}