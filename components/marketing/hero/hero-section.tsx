import Link from "next/link"
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DashboardPreview } from "./dashboard-preview"
import { HeroBackground } from "./hero-background"
import { HeroSocialProof } from "./hero-social-proof"
import { TrustedBy } from "./trusted-by"

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden rounded-b-[20px] bg-background px-5 pt-14 pb-16 sm:px-6 sm:pt-20"
    >
      <HeroBackground />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <Link
          href="/teach"
          className="inline-flex max-w-full items-center gap-2 rounded-full border bg-card py-1.5 pr-3 pl-1.5 text-[11px] text-muted-foreground transition-colors hover:bg-hover sm:text-[13px]"
        >
          <Badge variant="brand">NEW</Badge>
          <span>Instructor payouts now run monthly</span>
          <ChevronRightIcon className="size-3.5 shrink-0" aria-hidden="true" />
        </Link>
        <h1
          id="hero-heading"
          className="mt-7 text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.045em]"
        >
          <span className="block">Learn anything.</span>
          <span className="text-gradient mt-1 block">Teach everything.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[680px] text-base leading-relaxed text-muted-foreground sm:text-[19px]">
          One platform for both sides of the classroom — 12,000 courses to learn
          from,
          <br className="hidden sm:block" /> and everything you need to build
          and sell your own.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ size: "xl" }),
              "hover:text-primary-foreground"
            )}
          >
            Start learning free{" "}
            <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
          </Link>
          <Link
            href="/teach"
            className={buttonVariants({ variant: "surface", size: "xl" })}
          >
            Become an instructor
          </Link>
        </div>
        <HeroSocialProof />
        <DashboardPreview />
        <TrustedBy />
      </div>
    </section>
  )
}
