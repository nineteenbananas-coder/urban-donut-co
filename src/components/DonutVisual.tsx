type Props = {
  glaze: string
  icing?: string
  hole?: string
  size?: number
  className?: string
  sprinkle?: boolean
  animate?: boolean
}

export function DonutVisual({
  glaze,
  icing = glaze,
  hole = '#1A1614',
  size = 160,
  className = '',
  sprinkle = false,
  animate = false,
}: Props) {
  const id = `donut-${size}-${glaze.replace('#', '')}`

  return (
    <svg
      className={`donut-visual ${animate ? 'is-animated' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-body`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={icing} />
          <stop offset="55%" stopColor={glaze} />
          <stop offset="100%" stopColor={glaze} stopOpacity="0.92" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>
      <circle cx="100" cy="108" r="78" fill="#000" opacity="0.18" />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill={`url(#${id}-body)`}
        filter={`url(#${id}-soft)`}
      />
      <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />
      <circle cx="100" cy="100" r="30" fill={hole} />
      <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      <path
        d="M42 78 C58 52, 86 46, 104 58 C118 68, 126 64, 138 54"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {sprinkle && (
        <g strokeLinecap="round" strokeWidth="4">
          <line x1="58" y1="70" x2="68" y2="58" stroke="#FFE566" />
          <line x1="130" y1="62" x2="142" y2="72" stroke="#7AD7FF" />
          <line x1="148" y1="110" x2="160" y2="118" stroke="#FF8FAB" />
          <line x1="56" y1="126" x2="46" y2="136" stroke="#9BE39B" />
          <line x1="118" y1="148" x2="130" y2="158" stroke="#FFD166" />
          <line x1="78" y1="150" x2="70" y2="162" stroke="#FF6B6B" />
        </g>
      )}
    </svg>
  )
}
