type Props = {
  size?: number
  className?: string
}

/** Circular bubbly URBAN DONUT CO mark from the Grok brand brief. */
export function Logo({ size = 220, className = '' }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 400 400"
      role="img"
      aria-label="Urban Donut Co"
    >
      <rect width="400" height="400" fill="#070708" />
      <circle cx="200" cy="200" r="168" fill="none" stroke="#F6F3EC" strokeWidth="10" />
      <g fill="#F6F3EC">
        {/* five-petal flower */}
        <g transform="translate(200 58)">
          <circle cy="-14" r="9" />
          <circle cx="13.3" cy="-4.3" r="9" />
          <circle cx="8.2" cy="11.3" r="9" />
          <circle cx="-8.2" cy="11.3" r="9" />
          <circle cx="-13.3" cy="-4.3" r="9" />
          <circle r="5.5" />
        </g>
        {/* teardrop flourishes */}
        <ellipse cx="118" cy="88" rx="7" ry="12" transform="rotate(-32 118 88)" />
        <ellipse cx="282" cy="88" rx="7" ry="12" transform="rotate(32 282 88)" />
        <ellipse cx="108" cy="310" rx="8" ry="14" transform="rotate(28 108 310)" />
        <ellipse cx="292" cy="310" rx="8" ry="14" transform="rotate(-28 292 310)" />
      </g>
      <text
        x="200"
        y="148"
        textAnchor="middle"
        fill="#F6F3EC"
        fontFamily="Fredoka, Nunito, sans-serif"
        fontWeight="700"
        fontSize="54"
        letterSpacing="0.04em"
      >
        URBAN
      </text>
      <text
        x="200"
        y="214"
        textAnchor="middle"
        fill="#F6F3EC"
        fontFamily="Fredoka, Nunito, sans-serif"
        fontWeight="700"
        fontSize="52"
        letterSpacing="0.06em"
      >
        DONUT
      </text>
      <text
        x="200"
        y="278"
        textAnchor="middle"
        fill="#F6F3EC"
        fontFamily="Fredoka, Nunito, sans-serif"
        fontWeight="700"
        fontSize="48"
        letterSpacing="0.18em"
      >
        CO.
      </text>
    </svg>
  )
}
