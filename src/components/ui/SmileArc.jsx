import useReveal from '../../hooks/useReveal'

/**
 * SmileArc
 * The site's signature mark: a hand-drawn dental-arch curve that "draws"
 * itself on scroll. Doubles as a smile line and a clinical arch diagram —
 * it reappears as a divider between sections to unify the identity.
 *
 * variant "divider": thin full-width horizontal arc used between sections
 * variant "hero": larger decorative arch used in the hero composition
 */
export default function SmileArc({ variant = 'divider', className = '', stroke = '#BB5E2E' }) {
  const [ref, visible] = useReveal({ threshold: 0.4 })

  if (variant === 'hero') {
    return (
      <svg
        ref={ref}
        viewBox="0 0 520 260"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M20 40 C 20 180, 500 180, 500 40"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          className={`arc-path ${visible ? 'arc-visible' : ''}`}
          style={{ '--dash': 900 }}
        />
        <path
          d="M60 20 C 60 150, 460 150, 460 20"
          stroke="#8B9C8C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 8"
          opacity="0.6"
        />
      </svg>
    )
  }

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 60"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 8 C 300 58, 900 58, 1200 8"
        stroke={stroke}
        strokeWidth="1.5"
        className={`arc-path ${visible ? 'arc-visible' : ''}`}
        style={{ '--dash': 1400 }}
      />
    </svg>
  )
}
