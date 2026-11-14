import { RINGS } from '../data'
import { useCart } from '../cart'
import { DonutVisual } from './DonutVisual'

export function Menu() {
  const { add } = useCart()

  return (
    <section className="menu-section" id="rings" aria-labelledby="rings-heading">
      <div className="section-head">
        <h2 id="rings-heading">The Six Rings</h2>
        <p>Six rings. Zero slices. The dozen starts here.</p>
      </div>
      <ol className="menu-list">
        {RINGS.map((ring, index) => (
          <li
            key={ring.id}
            className="menu-item"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="menu-visual">
              <DonutVisual
                glaze={ring.glaze}
                icing={ring.icing}
                size={118}
                pearl={ring.id === 'wide-wonder'}
                goldStripe={ring.id === 'beam'}
              />
            </div>
            <div className="menu-copy">
              <div className="menu-title-row">
                <span className="ring-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{ring.name}</h3>
              </div>
              <p>{ring.blurb}</p>
              <p className="finish">{ring.finish}</p>
              <div className="menu-actions">
                <span className="price">${ring.price.toFixed(2)}</span>
                <button
                  type="button"
                  className="btn btn-small"
                  onClick={() =>
                    add({
                      id: ring.id,
                      name: ring.name,
                      detail: ring.blurb,
                      price: ring.price,
                      glaze: ring.glaze,
                    })
                  }
                >
                  Add to dozen
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
