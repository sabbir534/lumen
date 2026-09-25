import { HeroSection } from "@/components/marketing/hero/hero-section"
import { StatsSection } from "@/components/marketing/stats/stats-section"

export default function Page() {
  return (
    <main className="min-h-[calc(100svh-72px)]">
      <HeroSection />
      <StatsSection />
    </main>
  )
}
