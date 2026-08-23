/**
 * SectionHeading
 * Shared eyebrow + display-heading pattern. Not a "card" — a typographic
 * convention that repeats across sections to give the page a consistent voice.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  tone = 'dark',
  children,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const eyebrowColor = tone === 'light' ? 'text-porcelain-deep' : 'text-copper'
  const titleColor = tone === 'light' ? 'text-porcelain' : 'text-ink'

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`font-serif text-[12px] tracking-wider uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-medium ${titleColor} text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.08] max-w-2xl`}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}
