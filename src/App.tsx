import { useEffect, useState } from 'react'
import { CartProvider, useCart } from './cart'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Builder } from './components/Builder'
import { CartDrawer } from './components/CartDrawer'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'

function Shell() {
  const [builderOpen, setBuilderOpen] = useState(false)
  const { open: cartOpen } = useCart()

  useEffect(() => {
    const locked = builderOpen || cartOpen
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [builderOpen, cartOpen])

  const openBuilder = () => setBuilderOpen(true)

  return (
    <div className="app-shell">
      <Header onBuild={openBuilder} />
      <main>
        <Hero onBuild={openBuilder} />
        <Menu />
        <section className="pitch" aria-labelledby="pitch-heading">
          <div className="pitch-inner">
            <h2 id="pitch-heading">Four steps. Infinite glaze.</h2>
            <p>
              Pick a base, paint the glaze, stack a topping, finish with drizzle.
              The Selfie Bar is the reason people miss their train.
            </p>
            <button type="button" className="btn btn-primary" onClick={openBuilder}>
              Open the bar
            </button>
          </div>
        </section>
        <Visit onBuild={openBuilder} />
      </main>
      <Footer />
      <Builder open={builderOpen} onClose={() => setBuilderOpen(false)} />
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
