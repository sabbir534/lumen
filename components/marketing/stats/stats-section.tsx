import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const stats = [
  { value: "12,000+", label: "Courses across 10 categories" },
  { value: "480k", label: "Learners on the platform" },
  { value: "88%", label: "Median completion rate" },
  { value: "$4.2M", label: "Paid out to instructors" },
] as const

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative isolate overflow-hidden bg-background px-5 py-12 sm:px-6"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -bottom-80 size-[520px] rounded-full bg-accent-1 opacity-(--ambient) blur-[80px]" />
        <div className="bg-dots absolute right-0 bottom-0 h-32 w-56 [mask-image:linear-gradient(to_bottom,transparent,black)] opacity-25" />
      </div>
      <Card className="relative mx-auto max-w-[1152px] gap-0 rounded-[18px] py-0 ring-border">
        <CardHeader className="sr-only">
          <CardTitle>
            <h2 id="stats-heading">Lumen in numbers</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative flex min-h-[120px] flex-col items-center justify-center gap-2 px-3 py-6 text-center"
              >
                <dt className="order-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  {stat.label}
                </dt>
                <dd className="stat-figure text-[32px] sm:text-[38px]">
                  {stat.value}
                </dd>
                {index < stats.length - 1 && (
                  <Separator
                    orientation="vertical"
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 right-0",
                      index === 1 && "hidden md:block"
                    )}
                  />
                )}
                {index < 2 && (
                  <Separator
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 md:hidden"
                  />
                )}
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </section>
  )
}
