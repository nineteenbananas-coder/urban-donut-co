import { FEATURED } from '../data'
import { useCart } from '../cart'
import { DonutVisual } from './DonutVisual'

export function Menu() {
  const { add } = useCart()

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-heading">
      <div className="section-head">
        <h2 id="menu-heading">The case</h2>
        <p>Six fresh faces, rotated with the morning fryer.</p>
      </div>
      <ul className="menu-list">
        {FEATURED.map((donut, index) => (
          <li
            key={donut.id}
            className="menu-item"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="menu-visual">
              <DonutVisual
                glaze={donut.glaze}
                icing={donut.icing}
                hole={donut.hole}
                size={118}
                sprinkle={donut.id === 'city-sprinkle'}
              />
            </div>
            <div className="menu-copy">
              <div className="menu-title-row">
                <h3>{donut.name}</h3>
                {donut.tag ? <span className="tag">{donut.tag}</span> : null}
              </div>
              <p>{donut.blurb}</p>
              <div className="menu-actions">
                <span className="price">${donut.price.toFixed(2)}</span>
                <button
                  type="button"
                  className="btn btn-small"
                  onClick={() =>
                    add({
                      id: donut.id,
                      name: donut.name,
                      detail: donut.blurb,
                      price: donut.price,
                      glaze: donut.glaze,
                    })
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
