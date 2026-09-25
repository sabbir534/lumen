export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="hero-background pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-glow hero-glow-violet" />
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-cyan" />
      <div className="bg-hero-grid hero-grid absolute inset-0" />
    </div>
  )
}
