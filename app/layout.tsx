import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'That web3 Dapp',
  description: 'A community curated information funnel!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main>

          {children}
        
        
        </main>
        <Footer />
        </body>

        
    </html>
  )
}
