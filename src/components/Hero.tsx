import { Logo } from './Logo'
import { DonutVisual } from './DonutVisual'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero-city" aria-hidden="true" />
      <div className="hero-beam" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">Not a slice · urban.donut.co</p>
        <h1 id="hero-brand" className="hero-brand">
          Urban Donut <span>Co</span>
        </h1>
        <p className="hero-lede">
          They said the city only had pizza left. We heard a hole.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#rings">
            See the six rings
          </a>
          <a className="btn btn-ghost" href="#wide-wonder">
            Wide Wonder
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-stage">
          <Logo size={280} className="hero-logo" />
          <DonutVisual
            glaze="#F3D27A"
            icing="#FFF1C2"
            size={112}
            goldStripe
            animate
            className="hero-ring a"
          />
          <DonutVisual
            glaze="#F6F3EC"
            icing="#FFFDF8"
            size={88}
            pearl
            className="hero-ring b"
          />
        </div>
      </div>
    </section>
  )
}
