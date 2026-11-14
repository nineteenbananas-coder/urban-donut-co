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
          <h2 id="cart-title">The dozen</h2>
          <button type="button" className="icon-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
        </header>

        {placed ? (
          <div className="cart-success">
            <DonutVisual glaze="#F3D27A" icing="#FFF1C2" size={120} goldStripe animate />
            <h3>Beam caught</h3>
            <p>
              Sample checkout only — bag cleared locally. If you wanted a slice,
              the city still has plenty.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setPlaced(false)
                setOpen(false)
              }}
            >
              Back to the rings
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <p>Empty dozen. The beam is waiting.</p>
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              See the six rings
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <DonutVisual
                    glaze={item.glaze ?? '#F3D27A'}
                    size={56}
                    pearl={item.id === 'wide-wonder'}
                    goldStripe={item.id === 'beam'}
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
                Place sample dozen
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
