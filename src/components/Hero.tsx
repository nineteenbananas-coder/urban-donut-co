import { DonutVisual } from './DonutVisual'

type Props = {
  onBuild: () => void
}

export function Hero({ onBuild }: Props) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">Fresh daily · Uptown Dallas</p>
        <h1 id="hero-brand" className="hero-brand">
          Urban Donut <span>Co</span>
        </h1>
        <p className="hero-lede">
          Hand-glazed donuts and a design-your-own bar for the city that never
          clocks out of craving.
        </p>
        <div className="hero-cta">
          <button type="button" className="btn btn-primary" onClick={onBuild}>
            Build your donut
          </button>
          <a className="btn btn-ghost" href="#menu">
            See the case
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit">
          <DonutVisual
            glaze="#FF3D6E"
            icing="#FF7A9C"
            size={320}
            sprinkle
            animate
            className="hero-donut"
          />
          <DonutVisual
            glaze="#F5C84C"
            icing="#FFE08A"
            size={120}
            className="hero-donut-small a"
          />
          <DonutVisual
            glaze="#3D241C"
            icing="#6B4335"
            size={96}
            className="hero-donut-small b"
          />
        </div>
      </div>
    </section>
  )
}
