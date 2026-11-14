import { useCart } from '../cart'

type Props = {
  onBuild: () => void
}

export function Header({ onBuild }: Props) {
  const { count, setOpen } = useCart()

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Urban Donut Co home">
        <span className="brand-dot" aria-hidden="true" />
        <span className="brand-text">
          Urban Donut <em>Co</em>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#menu">Menu</a>
        <button type="button" className="linkish" onClick={onBuild}>
          Build yours
        </button>
        <a href="#visit">Visit</a>
      </nav>
      <button
        type="button"
        className="cart-btn"
        onClick={() => setOpen(true)}
        aria-label={`Open cart, ${count} items`}
      >
        <span>Bag</span>
        <span className="cart-count">{count}</span>
      </button>
    </header>
  )
}
