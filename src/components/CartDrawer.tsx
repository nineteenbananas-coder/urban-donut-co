import { useState } from 'react'
import { useCart } from '../cart'
import { DonutVisual } from './DonutVisual'

export function CartDrawer() {
  const { items, open, setOpen, total, setQty, remove, clear } = useCart()
  const [placed, setPlaced] = useState(false)

  if (!open) return null

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button type="button" className="cart-backdrop" aria-label="Close bag" onClick={() => setOpen(false)} />
      <aside className="cart-drawer">
        <header className="cart-header">
          <h2 id="cart-title">Your bag</h2>
          <button type="button" className="icon-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
        </header>

        {placed ? (
          <div className="cart-success">
            <DonutVisual glaze="#FF3D6E" icing="#FF7A9C" size={120} sprinkle animate />
            <h3>Order queued</h3>
            <p>
              This is a sample checkout — your bag is cleared locally. Swing by
              the Uptown counter or wire up real payments when you are ready.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setPlaced(false)
                setOpen(false)
              }}
            >
              Keep browsing
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <p>Your bag is empty. The fryer is not.</p>
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              Browse the case
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <DonutVisual
                    glaze={item.glaze ?? '#FF3D6E'}
                    size={56}
                    sprinkle={item.name.includes('Sprinkle') || item.detail.includes('sprinkle')}
                  />
                  <div className="cart-item-copy">
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                    <div className="cart-item-meta">
                      <div className="qty">
                        <button type="button" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease">
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase">
                          +
                        </button>
                      </div>
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <button type="button" className="remove" onClick={() => remove(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <footer className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <p className="sample-note">Sample data checkout — no payment is taken.</p>
              <button
                type="button"
                className="btn btn-primary btn-wide"
                onClick={() => {
                  clear()
                  setPlaced(true)
                }}
              >
                Place sample order
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
