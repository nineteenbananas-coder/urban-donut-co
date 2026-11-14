import { useCart } from '../cart'

export function Header() {
  const { count, setOpen } = useCart()

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Urban Donut Co home">
        <span className="brand-flower" aria-hidden="true" />
        <span className="brand-text">Urban Donut Co</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#rings">The Six Rings</a>
        <a href="#story">The Hole</a>
        <a href="#wide-wonder">Wide Wonder</a>
      </nav>
      <button
        type="button"
        className="cart-btn"
        onClick={() => setOpen(true)}
        aria-label={`Open bag, ${count} items`}
      >
        <span>Dozen</span>
        <span className="cart-count">{count}</span>
      </button>
    </header>
  )
}
