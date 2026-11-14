import { HOURS, LOCATION } from '../data'

type Props = {
  onBuild: () => void
}

export function Visit({ onBuild }: Props) {
  return (
    <section className="visit-section" id="visit" aria-labelledby="visit-heading">
      <div className="visit-panel">
        <div className="section-head left">
          <h2 id="visit-heading">Hit the counter</h2>
          <p>Glaze still warm. Coffee still loud. Seats still scarce.</p>
        </div>
        <div className="visit-grid">
          <div>
            <h3>{LOCATION.name}</h3>
            <p>
              {LOCATION.address}
              <br />
              {LOCATION.city}
            </p>
            <a className="phone" href={`tel:${LOCATION.phone.replace(/\D/g, '')}`}>
              {LOCATION.phone}
            </a>
          </div>
          <div>
            <h3>Hours</h3>
            <ul className="hours">
              {HOURS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={onBuild}>
          Build one for pickup
        </button>
      </div>
    </section>
  )
}
