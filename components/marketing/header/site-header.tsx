import Link from "next/link"
import { Logo } from "@/components/brand/logo"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { HeaderActions } from "./header-actions"
import { MobileNavigation } from "./mobile-navigation"
import { marketingNavigation } from "./navigation"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-[71px] max-w-[1200px] items-center gap-7 px-6">
        <Logo />
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {marketingNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          <ThemeToggle />
          <div className="hidden items-center gap-6 md:flex">
            <HeaderActions />
          </div>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
