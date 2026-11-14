type Props = {
  glaze: string
  icing?: string
  hole?: string
  size?: number
  className?: string
  pearl?: boolean
  goldStripe?: boolean
  animate?: boolean
}

export function DonutVisual({
  glaze,
  icing = glaze,
  hole = '#070708',
  size = 160,
  className = '',
  pearl = false,
  goldStripe = false,
  animate = false,
}: Props) {
  const id = `ring-${size}-${glaze.replace('#', '')}`

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
          <stop offset="60%" stopColor={glaze} />
          <stop offset="100%" stopColor={glaze} stopOpacity="0.92" />
        </radialGradient>
        <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3D27A" />
          <stop offset="100%" stopColor="#FFF1C2" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="108" r="78" fill="#000" opacity="0.35" />
      <circle cx="100" cy="100" r="78" fill={`url(#${id}-body)`} />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="rgba(246,243,236,0.18)"
        strokeWidth="3"
      />
      <circle cx="100" cy="100" r="30" fill={hole} />
      <circle
        cx="100"
        cy="100"
        r="30"
        fill="none"
        stroke="rgba(246,243,236,0.08)"
        strokeWidth="4"
      />
      <path
        d="M44 76 C60 50, 88 44, 106 56 C120 66, 128 62, 140 52"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {pearl && (
        <g fill="#F6F3EC">
          <circle cx="70" cy="62" r="3.2" />
          <circle cx="92" cy="54" r="2.6" />
          <circle cx="118" cy="58" r="3" />
          <circle cx="140" cy="78" r="2.8" />
          <circle cx="148" cy="108" r="3.1" />
          <circle cx="136" cy="138" r="2.5" />
          <circle cx="108" cy="150" r="3" />
          <circle cx="74" cy="146" r="2.7" />
          <circle cx="54" cy="118" r="3" />
          <circle cx="52" cy="88" r="2.4" />
        </g>
      )}
      {goldStripe && (
        <path
          d="M78 48 C96 90, 108 118, 126 156"
          fill="none"
          stroke={`url(#${id}-beam)`}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.95"
        />
      )}
    </svg>
  )
}
