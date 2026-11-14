import { useMemo, useState } from 'react'
import { BASES, DRIZZLES, GLAZES, TOPPINGS } from '../data'
import { useCart } from '../cart'
import { DonutVisual } from './DonutVisual'

type Props = {
  open: boolean
  onClose: () => void
}

export function Builder({ open, onClose }: Props) {
  const { add } = useCart()
  const [baseId, setBaseId] = useState(BASES[0].id)
  const [glazeId, setGlazeId] = useState(GLAZES[1].id)
  const [toppingId, setToppingId] = useState(TOPPINGS[1].id)
  const [drizzleId, setDrizzleId] = useState(DRIZZLES[0].id)

  const base = BASES.find((b) => b.id === baseId) ?? BASES[0]
  const glaze = GLAZES.find((g) => g.id === glazeId) ?? GLAZES[0]
  const topping = TOPPINGS.find((t) => t.id === toppingId) ?? TOPPINGS[0]
  const drizzle = DRIZZLES.find((d) => d.id === drizzleId) ?? DRIZZLES[0]

  const price = useMemo(
    () => base.price + glaze.price + topping.price + drizzle.price,
    [base, glaze, topping, drizzle],
  )

  if (!open) return null

  const detail = [base.label, glaze.label, topping.label, drizzle.label]
    .filter((label) => !label.startsWith('No '))
    .join(' · ')

  return (
    <div className="builder-overlay" role="dialog" aria-modal="true" aria-labelledby="builder-title">
      <button type="button" className="builder-backdrop" aria-label="Close builder" onClick={onClose} />
      <div className="builder-panel">
        <header className="builder-header">
          <div>
            <p className="eyebrow">Design your own</p>
            <h2 id="builder-title">The Selfie Bar</h2>
          </div>
          <button type="button" className="icon-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="builder-body">
          <div className="builder-preview">
            <DonutVisual
              glaze={glaze.color ?? '#FFF4E8'}
              icing={base.color}
              size={220}
              sprinkle={topping.id === 'sprinkles'}
              animate
            />
            <p className="builder-price">${price.toFixed(2)}</p>
            <p className="builder-detail">{detail}</p>
          </div>

          <div className="builder-controls">
            <OptionGroup
              label="1. Base"
              options={BASES}
              value={baseId}
              onChange={setBaseId}
            />
            <OptionGroup
              label="2. Glaze"
              options={GLAZES}
              value={glazeId}
              onChange={setGlazeId}
              swatches
            />
            <OptionGroup
              label="3. Topping"
              options={TOPPINGS}
              value={toppingId}
              onChange={setToppingId}
            />
            <OptionGroup
              label="4. Drizzle"
              options={DRIZZLES}
              value={drizzleId}
              onChange={setDrizzleId}
            />
          </div>
        </div>

        <footer className="builder-footer">
          <button
            type="button"
            className="btn btn-primary btn-wide"
            onClick={() => {
              add({
                id: `custom-${baseId}-${glazeId}-${toppingId}-${drizzleId}`,
                name: 'Custom Selfie',
                detail,
                price,
                glaze: glaze.color,
              })
              onClose()
            }}
          >
            Add to bag · ${price.toFixed(2)}
          </button>
        </footer>
      </div>
    </div>
  )
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
  swatches = false,
}: {
  label: string
  options: { id: string; label: string; price: number; color?: string }[]
  value: string
  onChange: (id: string) => void
  swatches?: boolean
}) {
  return (
    <fieldset className="option-group">
      <legend>{label}</legend>
      <div className={`option-row ${swatches ? 'swatches' : ''}`}>
        {options.map((option) => {
          const selected = option.id === value
          return (
            <button
              key={option.id}
              type="button"
              className={`option-chip ${selected ? 'is-selected' : ''}`}
              onClick={() => onChange(option.id)}
              aria-pressed={selected}
            >
              {swatches && option.color ? (
                <span
                  className="swatch"
                  style={{ background: option.color }}
                  aria-hidden="true"
                />
              ) : null}
              <span>{option.label}</span>
              {option.price > 0 ? (
                <span className="option-price">+${option.price.toFixed(2)}</span>
              ) : null}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
