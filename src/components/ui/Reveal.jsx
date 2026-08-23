import useReveal from '../../hooks/useReveal'

/**
 * Reveal
 * Wraps children and fades/slides them in once they enter the viewport.
 * `delay` accepts a Tailwind-safe ms value applied via inline style.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
