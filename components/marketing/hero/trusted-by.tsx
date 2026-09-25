const teams = [
  "Northwind",
  "Aperture",
  "Ridgeline",
  "Fieldwork",
  "Kōbi",
  "Halcyon",
] as const

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by-heading" className="mt-14">
      <h2
        id="trusted-by-heading"
        className="text-[11px] leading-normal font-semibold tracking-[0.16em] text-subtle-foreground uppercase"
      >
        Trusted by teams learning at
      </h2>
      <ul className="mx-auto mt-5 flex max-w-[680px] flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-between sm:gap-x-8">
        {teams.map((team) => (
          <li
            key={team}
            className="text-lg leading-tight font-extrabold tracking-[-0.035em] text-muted-foreground"
          >
            {team}
          </li>
        ))}
      </ul>
    </section>
  )
}
