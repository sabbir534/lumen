import type { CSSProperties } from "react"
import Image from "next/image"
import {
  AwardIcon,
  BookOpenIcon,
  CircleCheckIcon,
  FlameIcon,
  MessagesSquareIcon,
  BadgeCheckIcon,
  CompassIcon,
  GraduationCapIcon,
  HeartIcon,
  LayoutDashboardIcon,
  SearchIcon,
} from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const courses = [
  {
    title: "Mastering Illustration",
    progress: 68,
    image: "illustration",
    color: "var(--accent-1)",
  },
  {
    title: "Python for Everybody",
    progress: 42,
    image: "python",
    color: "var(--accent-2)",
  },
  {
    title: "The Complete React Bootcamp",
    progress: 91,
    image: "react",
    color: "var(--success)",
  },
]

export function DashboardPreview() {
  return (
    <figure
      aria-label="Lumen student dashboard preview showing three courses in progress and a weekly learning goal at 72 percent"
      className="hero-preview relative mx-auto mt-14 max-w-[1080px] overflow-hidden rounded-[18px] border border-border bg-background text-left shadow-card motion-safe:animate-[floaty_4s_ease-in-out_infinite]"
    >
      <div aria-hidden="true" inert>
        <div className="relative flex h-10 items-center border-b bg-soft px-4">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-destructive" />
            <span className="size-2.5 rounded-full bg-star" />
            <span className="size-2.5 rounded-full bg-success" />
          </div>
          <span className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-md border bg-card px-3 py-1 text-[11px] text-subtle-foreground">
            <BadgeCheckIcon className="size-3 text-success" />{" "}
            app.lumen.co/overview
          </span>
        </div>
        <div className="flex">
          <aside className="hidden w-[206px] shrink-0 border-r bg-soft p-3 sm:flex sm:flex-col">
            <div className="origin-left scale-75 px-2 py-1">
              <Logo />
            </div>
            <div className="my-3 grid grid-cols-2 rounded-lg bg-track p-1 text-center text-[11px] font-semibold">
              <span className="rounded-md bg-card py-1">Student</span>
              <span className="py-1 text-muted-foreground">Instructor</span>
            </div>
            <p className="mb-1 px-2 text-[9px] font-semibold tracking-widest text-subtle-foreground">
              LEARN
            </p>
            {[
              { label: "Dashboard", icon: LayoutDashboardIcon },
              { label: "Browse Courses", icon: CompassIcon },
              { label: "My Learning", icon: GraduationCapIcon },
              { label: "Wishlist", icon: HeartIcon },
              { label: "Certificates", icon: AwardIcon },
              { label: "Discussions", icon: MessagesSquareIcon },
            ].map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs",
                  index === 0
                    ? "border bg-card font-semibold"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="size-3.5" />
                {label}
                {label === "Wishlist" && <Badge className="ml-auto">6</Badge>}
              </div>
            ))}
            <div className="mt-auto flex items-center gap-2 rounded-lg border bg-card p-2">
              <Image
                src="/images/marketing/learners/3.jpg"
                alt=""
                width={26}
                height={26}
                className="size-[26px] rounded-full object-cover"
              />
              <div className="text-[10px] leading-tight">
                <p className="font-semibold">Ada Lovelace</p>
                <p className="text-muted-foreground">ada@lumen.co</p>
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">Overview</span>
              <Badge variant="outline">
                <span className="size-1.5 rounded-full bg-info" />
                Student mode
              </Badge>
              <span className="ml-auto hidden items-center gap-2 rounded-lg border bg-card px-2 py-1 text-[10px] text-subtle-foreground lg:flex">
                <SearchIcon className="size-3" />
                Search <span className="rounded border px-1">⌘K</span>
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-[1.35fr_1fr]">
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Continue learning</CardTitle>
                  <CardAction>
                    <span className="text-[10px] text-subtle-foreground">
                      3 in progress
                    </span>
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {courses.map((course) => (
                    <div key={course.title} className="flex items-center gap-3">
                      <Image
                        src={`/images/marketing/courses/${course.image}.jpg`}
                        alt=""
                        width={42}
                        height={28}
                        className="h-7 w-[42px] rounded-md object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 truncate text-[11px] font-semibold">
                          {course.title}
                        </p>
                        <Progress
                          value={course.progress}
                          aria-label={course.title}
                          style={
                            {
                              "--primary": course.color,
                              "--muted": "var(--track)",
                            } as CSSProperties
                          }
                        />
                      </div>
                      <span className="text-[10px] font-bold">
                        {course.progress}%
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card size="sm" className="hidden md:flex">
                <CardHeader>
                  <CardTitle>Weekly goal</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2">
                  <div className="hero-goal-ring flex size-[84px] items-center justify-center rounded-full">
                    <div className="flex size-[64px] flex-col items-center justify-center rounded-full bg-card">
                      <span className="text-[22px] leading-none font-extrabold tracking-tight">
                        72%
                      </span>
                      <span className="mt-1 text-[9px] text-muted-foreground">
                        of 5 hrs
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 text-[9px] text-muted-foreground">
                    {[
                      ["Video", "bg-accent-1"],
                      ["Reading", "bg-accent-2"],
                      ["Quiz", "bg-accent-3"],
                    ].map(([label, color]) => (
                      <span key={label} className="flex items-center gap-1">
                        <span className={cn("size-1.5 rounded-full", color)} />
                        {label}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                {
                  label: "Enrolled",
                  value: "14",
                  icon: BookOpenIcon,
                  color: "text-accent-2",
                },
                {
                  label: "Completed",
                  value: "9",
                  icon: CircleCheckIcon,
                  color: "text-success",
                },
                {
                  label: "Certificates",
                  value: "4",
                  icon: AwardIcon,
                  color: "text-accent-1",
                },
                {
                  label: "Day streak",
                  value: "31",
                  icon: FlameIcon,
                  color: "text-warning",
                },
              ].map(({ label, value, icon: Icon, color }) => (
                <Card key={label} size="sm" className="gap-1 py-2">
                  <CardHeader>
                    <CardTitle>
                      <span className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
                        <Icon className={cn("size-3", color)} />
                        {label}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-none font-bold">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card size="sm" className="mt-3 gap-2">
              <CardHeader>
                <CardTitle>Activity this week</CardTitle>
                <CardAction>
                  <span className="text-[10px] font-semibold text-success">
                    +18%
                  </span>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex h-[52px] items-end justify-around gap-3">
                  {[24, 37, 19, 37, 32, 15, 28].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={cn(
                          "w-[22px] rounded-t-sm",
                          index === 3 ? "bg-logo" : "bg-track"
                        )}
                        style={{ height }}
                      />
                      <span className="text-[8px] text-subtle-foreground">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </figure>
  )
}
