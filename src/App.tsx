import { useEffect } from 'react'
import { CartProvider, useCart } from './cart'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Story } from './components/Story'
import { Campaign } from './components/Campaign'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'

function Shell() {
  const { open: cartOpen } = useCart()

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Campaign />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  )
}
