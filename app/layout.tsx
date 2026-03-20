import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ backgroundColor: '#131921', padding: '10px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>amazon.acp</div>
          <div style={{ flex: 1 }}>
            <input type="text" placeholder="Search products..." style={{ width: '100%', padding: '10px', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span>Account</span>
            <span>Orders</span>
            <span>Cart</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}