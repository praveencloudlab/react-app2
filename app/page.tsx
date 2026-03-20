import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products?limit=20');
  const data = await res.json();
  const products = data.products;

  return (
    <main style={{ backgroundColor: '#EAEDED', minHeight: '100vh' }}>
      {/* Hero Banner Area */}
      <div style={{ 
        height: '200px', 
        background: 'linear-gradient(to bottom, #131921, #EAEDED)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white'
      }}>
       
      </div>

      {/* Responsive Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '20px',
        padding: '0 20px',
        marginTop: '-100px', // Pulls cards up over the banner
      }}>
        {products.map((product: any) => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
          }}>
            <div style={{ height: '200px', textAlign: 'center', marginBottom: '10px' }}>
              <img src={product.thumbnail} alt={product.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            
            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', height: '2.5rem', overflow: 'hidden' }}>
              {product.title}
            </h2>
            
            <div style={{ color: '#B12704', fontSize: '1.25rem', fontWeight: '700', margin: '10px 0' }}>
              ${product.price}
            </div>

            <Link href={`/product/${product.id}/`} style={{
              backgroundColor: '#FFD814',
              border: '1px solid #FCD200',
              borderRadius: '20px',
              padding: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'black',
              fontSize: '0.9rem',
              marginTop: 'auto'
            }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}